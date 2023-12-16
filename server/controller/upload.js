//for uploading blog image.
const multer = require("multer");
const router = require("../routes/main_routes");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {                                             //destination specifies the location where the files are to be stored.
    cb(null, './uploads')                                                             //cb stands for callback and specifies if null errors then store the file at uploads.
  },
  filename: function (req, file, cb) {                                               //to specify the filename for the stored files.
    const originalname = file.originalname;
    const extension = originalname.slice((originalname.lastIndexOf(".") - 1 >>> 0) + 2); // Extract the file extension
    const timestamp = Date.now();
    cb(null, `image-${timestamp}.${extension}`);
  }
})

const upload = multer({ storage: storage })

module.exports = upload