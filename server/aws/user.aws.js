import AWS from 'aws-sdk';

const uploadProfilePicture = async (file, userId) => {
  const s3 = new AWS.S3();
  const fileExt = file.originalname.split('.')[1];
  const uploadParams = {
    ACL: 'public-read',
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: file.buffer,
    Key: `profilePicture_${userId.toString()}.${fileExt}`,
  };

  const response = await s3.upload(uploadParams).promise();

  if (response.err) {
    console.log('Error occurred while trying to upload to S3 bucket', response.err);

    return undefined;
  }

  return response.Location;
};

export { uploadProfilePicture };
