require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const svg = require('./controllers/Svg');
const DataInfoController = require('./controllers/DataInfo');

app.get('/getSvg/:nome', svg.getSVG);
app.get('/getViewBox/:nome',svg.getViewBox);
app.get('/getStates', DataInfoController.getStates);
app.get('/getCountys/:estado', DataInfoController.getCountys);

app.listen(process.env.PORT, () => { 
  console.log(`Server listening on port ${process.env.PORT}`); 
});