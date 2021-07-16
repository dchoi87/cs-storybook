import React from 'react';
import PropTypes from 'prop-types';
import './Left-Right.scss';

export const LeftRight = ({ img, reverse, primaryText, secondaryText, color, background, cta }) => {
    return (
        <div className="grid-container">
            <div className={ `grid two-col ${reverse ? 'reverse' : ''}` }>
                <div className="left-block" style={{ color, background }}>
                    <h1>{ primaryText }</h1>
                    <p>{ secondaryText }</p>
                    {
                        cta &&
                        <div className="cta">
                            <button>Hello!</button>
                        </div>
                    }
                </div>
                <div className="right-block">
                    <img alt="" className="responsive" src={ img } />
                </div>
            </div>
        </div>
    );
};

LeftRight.propTypes = {
    reverse: PropTypes.bool,
    img: PropTypes.string,
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    cta: PropTypes.bool,
};