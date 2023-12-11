import mongoose from "mongoose";

// mongoose.connect(`mongodb://0.0.0.0:27017/csv_development`);
mongoose.connect('mongodb+srv://shivraj:mongodbcluster@cluster0.fk9lx9t.mongodb.net/csv?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting mongodb'));

db.once('open', function () {

    console.log('Connected to database :: mongoDB');
})

export default db;