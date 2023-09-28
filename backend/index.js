const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const userModel = require("./models/users.model")
const authRoutes = require('./routes/user.routes');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
app.use(cors())
app.use(express.json());
const PORT= 5000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.use("/api/v1/auth", authRoutes);

app.get('/', (req, res) => {
res.send('<h1>Platinum Med App Server Running!</h1');
});


mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
        console.log('Connected to DataBase')
    })).catch(err => console.log(err.message))
