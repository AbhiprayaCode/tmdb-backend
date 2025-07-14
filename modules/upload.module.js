import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { config } from 'dotenv';
import path from 'path';
config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const fileFilter = (req, file, cb) => {
    const allowed = /jpg|jpeg|png|gif/;
    const ext = path.test(file.mimetype);
    if(allowed.test(ext)) {
        cb(null, true);
    } else {
        cb(new Error('File type not allowed'), false);
    }
}