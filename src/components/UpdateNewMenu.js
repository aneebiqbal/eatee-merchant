import {
    baseUrl,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_BUCKET_NAME,
  } from '../config';
  import AWS from 'aws-sdk';
  import {decode} from 'base64-arraybuffer';
  import fs from 'react-native-fs';
  
  export const uploadImage = async (file, setLoading, setImage) => {
    setLoading(true);
    const s3bucket = new AWS.S3({
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      Bucket: AWS_BUCKET_NAME,
      signatureVersion: 'v4',
    });
    let contentType = 'image/jpeg';
    let contentDeposition = 'inline;filename="' + file.fileName + '"';
    const base64 = await fs.readFile(file.uri, 'base64');
    const arrayBuffer = decode(base64);
    s3bucket.createBucket(() => {
      const params = {
        Bucket: AWS_BUCKET_NAME,
        Key: file.fileName,
        Body: arrayBuffer,
        ContentDisposition: contentDeposition,
        ContentType: contentType,
      };
      s3bucket.upload(params, (err, data) => {
        if (err) {
          console.log('error in callback');
        }
        setLoading(false);
        setImage(data.Location);
      });
    });
  };