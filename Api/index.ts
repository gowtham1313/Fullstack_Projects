import express from 'express';
import bodyParser from 'body-parser';

require('dotenv').config();
// Route imports
const mainRoute = require('./src/route/CommonRoute');

const app = express();
app.use(express.json());
app.use(bodyParser.text());

// Start the server
app.listen(process.env.PORT, () => {
    // @ts-ignore
    if (parseInt(process.env.DEBUG) === 1) {
        console.log('The application is listening on port  ' + process.env.PORT + '!');
    }
})

// Route PATH
const defaultPath = '/commonAPI/api';
app.use(defaultPath, mainRoute);

app.get('/', (_req: any, _res: any) => {
    _res.send('CommonAPI ' + process.env.ENV + ' Running Successfully!');
})

process.on('uncaughtException', function (err) {
    // @ts-ignore
    if (parseInt(process.env.DEBUG) === 1) {
        console.log(err);
    }
});