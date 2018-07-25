import React  from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
   errorTop,
   errorBottom,
   value,
   placeholder,
   handleChange
}) => {
    return (
        <div>
            { errorTop &&
                <span>{errorTop}</span>
            }
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
            { errorBottom &&
                <span>{errorBottom}</span>
            }
        </div>
    );
};

TextInput.propTypes = {
    errorTop: PropTypes.string,
    errorBottom: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func
};

export default TextInput;