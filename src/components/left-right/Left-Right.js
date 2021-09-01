import React from 'react';
import PropTypes from 'prop-types';
import './Left-Right.scss';

export const LeftRight = ({ src, content, background, isReverse, hasRoundedCorners, crop }) => {
    const modifiers = {
        roundedCorners: hasRoundedCorners ? 'leftright--rounded' : '',
        reverse: isReverse ? 'leftright__grid--reverse' : '',
        crop: crop !== 'none' ? `leftright--crop ${crop}` : ''
    }
    return (
        <div className={ `leftright ${modifiers.roundedCorners} ${modifiers.crop}` }>
            <div className={ `leftright__grid ${modifiers.reverse}` }>
                <div className={ `leftright__content-left bg-${background}` }>
                    <div className="leftright__copy">
                        { content }
                    </div>
                </div>
                <div className="leftright__content-right">
                    <div className="leftright__media">
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