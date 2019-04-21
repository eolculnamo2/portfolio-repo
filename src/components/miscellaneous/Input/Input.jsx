/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input(props) {
  const { placeholder } = props;
  return (
    <>
      <input
        className="input-main"
        placeholder={placeholder}
      />
    </>
  )
}

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
