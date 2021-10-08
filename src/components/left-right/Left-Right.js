import React from 'react';
import PropTypes from 'prop-types';
import './Left-Right.scss';

export const LeftRight = ({
    type,
    src,
    content,
    background,
    isReverse,
    hasRoundedCorners,
    crop,
    isFullWidth,
}) => {
    const modifiers = {
        roundedCorners: hasRoundedCorners ? 'leftright--rounded' : '',
        reverse: isReverse ? 'leftright__grid--reverse' : '',
        crop: crop !== 'none' || type !== 'image' ? `leftright__media--crop-${crop}` : '',
        fullwdith: isFullWidth ? `leftright__rightCol--full-width` : '',
    }
    return (
        <div className={ `leftright ${modifiers.roundedCorners}` }>
            <div className={ `leftright__grid ${modifiers.reverse}` }>
                <div className={ `leftright__leftCol bg-${background}` }>
                    <div className="leftright__copy">
                        {/* content */}
                        <h2 className="">Conditions We Treat</h2>
                        <p>{ content }</p>
                        <div className="callToAction">
                            <a className="cta cta-primary" data-dm-category="call to action" data-dm-event="site interaction" data-dm-type="link" data-dm-value="VIEW FULL LIST" href="/content/cedars-sinai/programs/heart/clinical/cardiac-amyloidosis/conditions.html" id="cardiac-amyloidosis.par.leftrightblock.content-par.contentblock.customparsys.calltoaction" target="_self" title="View the full list of conditions and treatments for Cardiac Amyloidosis">VIEW FULL LIST</a>
                        </div>
                    </div>
                </div>
                <div className={ `leftright__rightCol ${modifiers.fullwdith}` }>
                    <div className={`leftright__media ${modifiers.crop}`}>
                        {
                            type === 'map' ? (
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.7767636854664!2d-118.38236428447955!3d34.07523642396477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bff4bd99caf7%3A0x52602e7df1013e71!2sCedars-Sinai%20Medical%20Center!5e0!3m2!1sen!2sus!4v1630554109075!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                            ) : type === 'video' ? (
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/NwaZ1TyiwLk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            ) : (
                                <img alt="img" className="responsive" src={ src } />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

LeftRight.propTypes = {
    type: PropTypes.string, 
    src: PropTypes.string,
    content: PropTypes.string,
    background: PropTypes.string,
    isReverse: PropTypes.bool,
    hasRoundedCorners: PropTypes.bool,
    crop: PropTypes.string,
    isFullWidth: PropTypes.bool,
};

LeftRight.defaultProps = {
    type: 'image',
    src: 'https://fakeimg.pl/800x600/cccccc,128/7d7d7d,255/?text=Img&font=lobster',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt odio sit amet nulla pellentesque lobortis. Cras porttitor tristique felis vel accumsan.',
    background: 'gray-light',
    isReverse: false,
    hasRoundedCorners: false,
    crop: 'none',
    isFullWidth: false,
};