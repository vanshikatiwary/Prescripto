import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Construct uploadsDir using import.meta.url
const uploadsDir = path.join(new URL('.', import.meta.url).pathname, 'uploads');

// Ensure the uploads directory exists
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure Multer to store uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir); // Specify the uploads directory
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + file.originalname;
        cb(null, uniqueSuffix); // Save the file with a unique name
    }
});

// Create the upload middleware
const upload = multer({ storage: storage });

export default upload;
