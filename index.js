require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, "views")));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "index.html"));
})

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`App is Listening on PORT ${PORT}`));