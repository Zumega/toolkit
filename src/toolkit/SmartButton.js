import React  from 'react';
import PropTypes from 'prop-types';
import './SmartButton.css';
import Loading from './Loading';

const SmartButton = ({
    text,
    handleClick,
    loading
}) => {
  return (
      <div className="buttonContainer">
          {
              loading ? <Loading active={loading} height="30px" /> : <button onClick={handleClick}>{text}</button>
          }
      </div>
  );
};

SmartButton.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

export default SmartButton;