import { CloudinaryStorage } from "multer-storage-cloudinary";
import  cloudinary  from "../cloudinaryConfig.js";
import multer from "multer";

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blog_posts',
    format: async (req, file) => 'jpg', // supports promises as well
    public_id: (req, file) => file.originalname.split('.')[0]
  }
});

// Set up multer with Cloudinary storage
const upload = multer({ storage: storage });

const fileUpload = ( req, res)=>{
    console.log(req.file.path)
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded!' });
    }
    res.status(200).json({
      message: 'File uploaded successfully!',
      fileUrl: req.file.path
    });
  };

export {upload, fileUpload}