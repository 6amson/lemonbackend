const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("../../routes/route");
const serverless = require('serverless-http');


const app = express();
const Path = '/.netlify/functions/index';
const dbURI = "mongodb+srv://bunmigrey:bunmiGrey@cluster1.pf8gmhg.mongodb.net/Lemon";

// middleware

app.use(cors());
app.use(cors({
  origin: "*",
}));
app.use(express.json());
app.use(Path, routes);
// const PORT = 3005;

// database connection
mongoose.connect(dbURI)
.then(() => {
    // app.listen(PORT, () => {
    //     console.log(`Server is running on http://localhost:${PORT}`);
    //   });
    console.log('mongo connected')})
.catch((err) => console.log(err))


module.exports.handler = serverless(app);