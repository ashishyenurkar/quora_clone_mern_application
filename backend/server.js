const express = require("express");
const cors = require("cors");
const path = require("path")
const  ViteExpress =require ("vite-express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const PORT = 8080;

const db = require("./db");
const router = require("./routes")

//DatabaseConnecton.
db.connect()

//middle-ware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use(cors());
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-Control-Allow-Headers", "*")
    next()
});

//routes
app.use('/api', router);


app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use( express.static(path.join(__dirname, "/../frontend/dist")));

app.get("*", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "/../frontend/dist/index.html"));
    } catch (e) {
        res.send("Oops! unexpected error");
    }
});



// server listening
 app.listen(process.env.PORT || PORT, () => {
    console.log(`Listining on port no ${PORT}`)
});
// ViteExpress.bind(app, server);
//ViteExpress.listen(app, PORT, () => console.log("Server is listening..."));
