import InvalidFileError from './InvalidFileError';

const createExtensionRegExp = (extensions) => {
  const reducer = (acc, val) => `${acc}|${val}`;
  const regex = extensions.reduce(reducer);

  return `\\.(${regex})$`;
};

const getFileName = (file) => {
  if (file.originalname && typeof file.originalname === 'string') return file.originalname;
  if (file.name && typeof file.name === 'string') return file.name;

  throw new InvalidFileError('ERR_INVALID_FILE');
};

const getFileType = (file) => {
  if (file.type && typeof file.type === 'string') return file.type;
  if (file.mimetype && typeof file.mimetype === 'string') return file.mimetype;

  throw new InvalidFileError('ERR_INVALID_FILE');
};

const isValidExt = (name, extensions) => {
  const strings = name.split('.');

  if (strings.length !== 2) return false;

  const regexp = new RegExp(createExtensionRegExp(extensions));

  if (!name.match(regexp)) return false;

  return true;
};

const isValidType = (fileType, types) => {
  const type = fileType.split('/')[0];

  if (types.some((value) => type === value)) return true;

  return false;
};

const isValidSubType = (fileType, sunTypes) => {
  const subType = fileType.split('/')[1];

  if (sunTypes.some((value) => subType === value)) return true;

  return false;
};

const validateImageFile = (file, types, subTypes, extensions) => {
  const fileName = getFileName(file);
  const fileType = getFileType(file);

  if (!isValidType(fileType, types)) {
    throw new InvalidFileError('ERR_FILE_TYPE');
  }

  if (!isValidSubType(fileType, subTypes)) {
    throw new InvalidFileError('ERR_FILE_SUB_TYPE');
  }

  if (!isValidExt(fileName, extensions)) {
    throw new InvalidFileError('ERR_FILE_EXT');
  }
};

export { validateImageFile };
