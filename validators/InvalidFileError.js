const errorMessages = {
  ERR_INVALID_FILE: 'Invalid file',
  ERR_FILE_TYPE: 'File format not supported',
  ERR_FILE_SUB_TYPE: 'File format not supported',
  ERR_FILE_EXT: 'File extension not supported',
};

class InvalidFileError extends Error {
  constructor(code) {
    super();

    this.code = code;
    this.message = errorMessages[code];
    this.name = 'InvalidFileError';

    Error.captureStackTrace(this, InvalidFileError);
  }
}

export default InvalidFileError;
