import CSV from '../models/csv_file.js';
import csv from 'csv-parser';
import { createReadStream } from 'fs';

let home = async function (req, res) {
    let files = await CSV.find({});
    return res.render('home', {
        files: files
    })
}

let upload = async function (req, res) {

    CSV.uploadedCSV(req, res, function (err) {
        if (err) { console.log('******Multer Error ', err); return; }

        // console.log(req.file);
        let newFile = CSV.create({
            name: req.body.file_name,
            file: `./uploads/${req.file.filename}`
        });

        return res.redirect('/');
    })
}

let file = async function (req, res) {
    try {
        let csvFile = await CSV.findById(req.params.id);
        const results = [];
        createReadStream(`./${csvFile.file}`)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                // console.log(results);
                let keys = Object.keys(results[0]);
                // console.log(keys);
                return res.render('file', {
                    file_name:csvFile.name,
                    keys: keys,
                    results: results
                });
            });
    } catch (err) {
        console.log('Error', err);
    }
}

let homeController = { home, upload, file };
export default homeController;