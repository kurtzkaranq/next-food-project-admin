const express = require('express');
require('dotenv').config();
const router = express.Router();
const cors = require('cors');

const foodRouter = require('./routes/foods');

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/' , foodRouter);

app.get('/' , (req , res)=>{
	res.send('my app is running')
});

app.listen(PORT)
