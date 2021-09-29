const AWS = require("aws-sdk");

AWS.config.update({
  secretAccessKey: process.env.AWS_ACCESS_SECRET,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});

var s3 = new AWS.S3();

const handleFileUpload = (req, res) => {
  const { originalname, buffer } = req.file;

  let params = {
    Bucket: process.env.AWS_BUCKET,
    Key: originalname,
    Body: buffer,
  };

  s3.upload(params, (err, result) => {
    if (err) {
      res.status(500).json({
        message: "Failed to upload",
        error: err.message,
      });
    }

    res.status(201).json({
      message: "File Uploaded",
      result,
    });
  });
};

module.exports = {
  handleFileUpload,
};
