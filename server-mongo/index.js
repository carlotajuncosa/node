const express = require('express');

require('dotenv').config();

const { connectDb } = require("./utils/db/db");
connectDb();

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

const server = express();

server.listen (PORT, () => {
    console.log(`server running in http://localhost:${PORT}`)
});
