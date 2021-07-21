import React from 'react';
import PropTypes from 'prop-types';
import './Left-Right.scss';

export const LeftRight = ({ src, reverse, content, background, roundedCorners }) => {
    return (
        <div className={ `cs-lr ${roundedCorners ? 'cs-lr--rounded' : ''}` }>
            <div className={ `cs-lr__grid ${reverse ? 'reverse' : ''}` }>
                <div className={ `cs-lr__content-left bg-${background}` }>
                    <div className="cs-lr__copy">
                        { content }
                    </div>
                </div>
                <div className="cs-lr__content-right">
                    <div className="cs-lr__media">
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
    reverse: PropTypes.bool,
    background: PropTypes.string,
    roundedCorners: PropTypes.bool,
};

LeftRight.defaultProps = {
    src: 'https://fakeimg.pl/800x600/cccccc,128/7d7d7d,255/?text=Img&font=lobster',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt odio sit amet nulla pellentesque lobortis. Cras porttitor tristique felis vel accumsan.',
    reverse: false,
    background: 'gray-light',
    roundedCorners: false,
};