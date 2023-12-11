import express from 'express';
const app = express();
const port = 2000;
import db from './config/mongoose.js';
import expressLayouts from 'express-ejs-layouts';


app.use(express.urlencoded({extended:true}));
app.use(express.static('./assets'))

app.use(expressLayouts);
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

app.set('view engine', 'ejs');
app.set('views', './views');




import router from './routes/index.js';
app.use('/', router);

app.listen(port, function (err) {
    if (!err) {
        console.log('Server is running on port', port);
    }
    else {
        console.log('Error in running server', err)
    }

})