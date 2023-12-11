import mongoose from "mongoose";
import multer from 'multer';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let csvSchema = new mongoose.Schema({
    name: {
        type: String
    },
    file: {
        type: String
    }
});

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
})

csvSchema.statics.uploadedCSV = multer({ storage: storage }).single('file');

let CSV = mongoose.model('CSV', csvSchema);
export default CSV;