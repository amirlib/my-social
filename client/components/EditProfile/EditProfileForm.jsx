import React from 'react';
import PropTypes from 'prop-types';
import AboutField from '../UI/fields/AboutField';
import EmailField from '../UI/fields/EmailField';
import NameField from '../UI/fields/NameField';
import PasswordField from '../UI/fields/PasswordField';
import ErrorTypography from '../UI/typographies/ErrorTypography';
import FormContext from '../../contexts/formContext';

const EditProfileForm = (props) => {
  const {
    error,
    handleChange,
    values,
  } = props;

  return (
    <>
      <FormContext.Provider value={{ handleChange }}>
        <NameField value={values.name} />
        <br />

        <AboutField value={values.about} />
        <br />

        <EmailField value={values.email} />
        <br />

        <PasswordField value={values.password} />
      </FormContext.Provider>

      <ErrorTypography errorText={error} />
    </>
  );
};

EditProfileForm.propTypes = {
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    about: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    password: PropTypes.string,
  }),
};

EditProfileForm.defaultProps = {
  error: '',
  values: {
    about: '',
    email: '',
    name: '',
    password: '',
  },
};

export default EditProfileForm;
