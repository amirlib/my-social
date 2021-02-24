import multer from 'multer';
import { validateImageFileMulter } from '../../validators/file.validator';
import InvalidFileError from '../../validators/Errors/InvalidFileError';

const extensions = ['jpg', 'jpeg', 'png'];
const types = ['image/jpeg', 'image/pjpeg', 'image/png'];

const fileFilter = function (req, file, cb) {
  try {
    validateImageFileMulter(
      file,
      {
        fieldName: 'Profile picture',
        options: {
          extensions,
          types,
        },
      },
    );

    return cb(null, true);
  } catch (err) {
    return cb(err, false);
  }
};

const multerConfig = {
  fileFilter,
  limits: {
    fileSize: 1048576,
  },
};

const multerErrorHandling = (err, req, res, next) => {
  if (err instanceof multer.MulterError || err instanceof InvalidFileError) {
    return res.status(400).send({ error: err.message });
  }

  return res.status(400).send({ error: 'Error has occurred in the uploading process' });
};

export { multerConfig, multerErrorHandling };
