const multer = require("multer");
const upload = multer({
  limits: {
    fileSize: 5000000,
  },
  fileFilter(req, file, callback) {
    if (!file.originalname.match(".(png|jpg|jpeg)$")) {
      callback(new Error("please upload an image"));
    }
    callback(undefined, true);
  },
});
// file error Handler
const errorFileHandler = (error, req, res, next) => {
  res.status(400).send({ error: error.message });
};
module.exports = { upload, errorFileHandler };
