const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


const server = require('http').Server(app);

//Conexão com o banco
mongoose.connect('mongodb://bossa-box:bossabox2018@ds031271.mlab.com:31271/bossa-bom-tools',  {useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));


server.listen(3000, () => {
    console.log('Server started on port 3000');
});