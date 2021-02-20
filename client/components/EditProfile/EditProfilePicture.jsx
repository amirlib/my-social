import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FileUpload from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from '@material-ui/core/styles';
import FormContext from '../../contexts/formContext';

const useStyles = makeStyles(() => ({
  filename: {
    marginLeft: '10px',
  },
  input: {
    display: 'none',
  },
}));

const EditProfilePicture = (props) => {
  const classes = useStyles();
  const { handleChange } = useContext(FormContext);
  const { profilePicture } = props;

  return (
    <>
      <label htmlFor="profilePicture">
        <input
          accept="image/*"
          className={classes.input}
          id="profilePicture"
          onChange={handleChange}
          name="profilePicture"
          type="file"
        />

        <Button
          color="default"
          component="span"
          variant="contained"
        >
          Upload
          <FileUpload />
        </Button>
      </label>

      <span className={classes.filename}>
        {profilePicture.name ? profilePicture.name : ''}
      </span>
    </>
  );
};

EditProfilePicture.propTypes = {
  profilePicture: PropTypes.shape({
    name: PropTypes.string,
  }),
};

EditProfilePicture.defaultProps = {
  profilePicture: {
    name: '',
  },
};

export default EditProfilePicture;
