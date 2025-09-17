import multer from 'multer';

const storage = multer.diskStorage({}); // Use disk storage or memory storage for simplicity

const upload = multer({ storage: storage });

export default upload;