import React from 'react';
import PropTypes from 'prop-types';
import './SmartAlert.css';


const SmartAlert = ({
    alerts
}) => {
    function handleLink (message) {
        let data = message;

        if (data.indexOf('[link ') >= 0) {
            // has a link
        }

        return data;
    }

    function setStyle (type) {
        let color;
        let backgroundColor;
        let borderColor;

        switch(type) {
            case 'error':
                // blocking action
                backgroundColor = '#faa';
                borderColor = '#f00';
                color = '#000';
                break;
            case 'warning':
                // bad action with work around
                backgroundColor = '#ff0';
                borderColor = '#fa0';
                color = '#000';
                break;
            case 'info':
                // prompt
                backgroundColor = '#aaf';
                borderColor = '#00f';
                color = '#000';
                break;
            case 'alert':
                // neutral message
                backgroundColor = '#ccc';
                borderColor = '#888';
                color = '#000';
                break;
            default:
                // actions successful
                backgroundColor = '#afa';
                borderColor = '#0f0';
                color = '#000';
        }

        return {
            backgroundColor,
            border: `2px solid ${borderColor}`,
            color
        };
    }

    return (
        <div className="alertContainer">
            {
                alerts.map((item, i) => (
                    <div
                        key={i}
                        className={`${item.type}Style`}
                        style={setStyle(item.type)}
                    >
                        {
                            item.icon &&
                            <span>!</span>
                        }
                        { handleLink(item.message) }
                        {
                            item.handleDismissClick &&
                            <span onClick={item.handleDismissClick}>x</span>
                        }
                    </div>
                ))
            }
        </div>
    );
};

SmartAlert.propTypes = {
    alerts: PropTypes.shape({
        type: PropTypes.oneOf([
            'alert',
            'info',
            'warning',
            'success',
            'error'
        ]).isRequired,
        message: PropTypes.string.isRequired,
        icon: PropTypes.string,
        handleDismissClick: PropTypes.func
    }).isRequired
};

export default SmartAlert;