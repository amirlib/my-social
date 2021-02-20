import multer from 'multer';
import { validateImageFile } from '../../validators/file.validator';
import InvalidFileError from '../../validators/InvalidFileError';

const imageExtensions = ['jpg', 'jpeg', 'png'];
const imagesSubTypes = ['jpeg', 'pjpeg', 'png'];
const types = ['image'];

const fileFilter = function (req, file, cb) {
  try {
    validateImageFile(file, types, imagesSubTypes, imageExtensions);

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
    res.status(400).send({ error: err.message });
  }
};

export { multerConfig, multerErrorHandling };
