import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = ({
    active,
    height,
    width,
    color
}) => {

    function stuff () {
        return (
            <div  id="container"
                  style={{
                      width: width,
                      height: height,
                      color: color
                  }}
            >
                <div className="rotate">
                    <div className="subRotate"></div>
                    <div className="subRotate"></div>
                    <div className="subRotate"></div>
                    <div className="subRotate"></div>
                </div>
            </div>
        );
        // return (
        //     <svg style={{width, height}} version="1.1" className="svg-loader" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 80 80" xmlSpace="preserve">
        //         <path id="spinner" fill={color || '#888'} d="M40,72C22.4,72,8,57.6,8,40C8,22.4, 22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2 s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6, 28,28,28c1.1,0,2,0.9,2,2S41.1,72,40,72z" >
        //             <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="0.6s" repeatCount="indefinite" />
        //         </path>
        //     </svg>
        // );
    }


    return (
        active && stuff()
    );
};

Loading.propTypes = {
    active: PropTypes.bool.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string
};

export default Loading;