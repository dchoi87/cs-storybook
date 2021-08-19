import React from 'react';
import PropTypes from 'prop-types';
import './Left-Right.scss';

export const LeftRight = ({ src, content, background, isReverse, hasRoundedCorners, crop }) => {
    const modifiers = {
        roundedCorners: hasRoundedCorners ? 'lrb--rounded' : '',
        reverse: isReverse ? 'reverse' : '',
        crop: crop !== 'none' ? `lrb--crop ${crop}` : ''
    }
    return (
        <div className={ `lrb ${modifiers.roundedCorners} ${modifiers.crop}` }>
            <div className={ `lrb__grid ${modifiers.reverse}` }>
                <div className={ `lrb__content-left bg-${background}` }>
                    <div className="lrb__copy">
                        { content }
                    </div>
                </div>
                <div className="lrb__content-right">
                    <div className="lrb__media">
                        <img alt="" className="responsive" src={ src } />
                    </div>
                </div>
            </div>
        </div>
    );
};

LeftRight.propTypes = {
    src: PropTypes.string,
    content: PropTypes.string,
    background: PropTypes.string,
    isReverse: PropTypes.bool,
    hasRoundedCorners: PropTypes.bool,
    crop: PropTypes.string,
};

LeftRight.defaultProps = {
    src: 'https://fakeimg.pl/800x600/cccccc,128/7d7d7d,255/?text=Img&font=lobster',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt odio sit amet nulla pellentesque lobortis. Cras porttitor tristique felis vel accumsan.',
    background: 'gray-light',
    isReverse: false,
    hasRoundedCorners: false,
    crop: 'none'
};