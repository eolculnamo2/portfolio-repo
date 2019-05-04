/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input(props) {
  const { handleInput, placeholder, stateKey } = props;

  return (
    <>
      <input
        className="input-main"
        onInput={ () => handleInput(stateKey, event.target.value) }
        placeholder={placeholder}
      />
    </>
  )
}

Input.defaultProps = {
  handleInput: function() {
    console.log('Missing required handle input function.')
  },
  placeholder: '',
  stateKey: '',
};

Input.propTypes = {
  handleInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  stateKey: PropTypes.string.isRequired,
};

export default Input;
