import validator from 'validator';
import validate from './validator';

const userSanitizer = (values) => ({
  email: validator.escape(values.email.trim()),
  name: validator.escape(values.name.trim()),
  password: validator.escape(values.password.trim()),
});

const userValidator = (values) => {
  const emailRes = validate(
    'Email',
    values.email,
    {
      isEmail: true,
      maxlength: 255,
      minlength: 7,
      required: true,
    },
  );

  if (emailRes.error) return emailRes;

  const nameRes = validate(
    'Name',
    values.name,
    {
      maxlength: 255,
      minlength: 2,
      required: true,
    },
  );

  if (nameRes.error) return nameRes;

  const passwordRes = validate(
    'Password',
    values.password,
    {
      maxlength: 20,
      minlength: 5,
      required: true,
    },
  );

  if (passwordRes.error) return passwordRes;

  return { valid: true };
};

export { userSanitizer, userValidator };
