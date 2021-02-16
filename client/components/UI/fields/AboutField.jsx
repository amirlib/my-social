import React from 'react';
import PropTypes from 'prop-types';
import CostumeTextField from './CostumeTextField';

const AboutField = (props) => {
  const { value } = props;

  return (
    <CostumeTextField
      id="about"
      label="About"
      multiline
      rows={2}
      value={value}
    />
  );
};

AboutField.propTypes = {
  value: PropTypes.string,
};

AboutField.defaultProps = {
  value: '',
};

export default AboutField;
