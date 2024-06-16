import express from 'express'
import { fileUpload, upload } from '../controllers/file_upload.js';

const router = express.Router()

router.post("/",upload.single('file'), fileUpload)

export default router;