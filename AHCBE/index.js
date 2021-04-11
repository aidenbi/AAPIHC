// index.js

/**
 * Required External Modules
 */
import express from 'express';

import dotenv from "dotenv";
import bodyParser from "body-parser"
import cors from "cors"


/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";
app.use(cors());
app.use(express.json());
app.use(bodyParser());
dotenv.config();
/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */
import sendemailRoute from "./routes/sendemail.js"
app.use('/sendemail', sendemailRoute);


app.get("/", (req, res) => {
    res.status(200).send("Hello");
});





/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});