import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './Img-Cropper.scss';

export class ImgCropper extends PureComponent {
  state = {
    src: null,
    crop: {
      unit: '%',
      width: 30,
      aspect: 16 / 9,
    },
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
      this.imgName = e.target.files[0].name;
    }
  };

  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  async downloadImage({ target }) {
    const src = target.dataset.img;
    const image = await fetch(src);
    const blob = await image.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');

    anchor.href = url;
    anchor.download = 'cropped';
    anchor.click();
  }

  getCroppedImg(image, crop, fileName) {
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(crop.width * scaleX);
    canvas.height = Math.ceil(crop.height * scaleY);

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width*scaleX,
        crop.height*scaleY,
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/png');
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div className="img-cropper">
        <div className="img-cropper__btns">
          <input type="file" id="file" name="file" accept="image/*" className="choose-file-input" onChange={this.onSelectFile} />
          <label htmlFor="file" className="img-cropper__btn">Choose File</label>
          <button className="img-cropper__btn" onClick={this.downloadImage} data-img={croppedImageUrl}>Download</button>
        </div>
        <div className="img-cropper__grid">
          <div className="img-cropper__input">
            {
              src &&
              <ReactCrop
                src={src}
                crop={crop}
                ruleOfThirds
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
              />
            }
          </div>
          <div className="img-cropper__output">
            {
              croppedImageUrl &&
              <div className="img-cropper__preview">
                <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}