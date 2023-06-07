const express = require("express");
const path = require("path");
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./routers/web"
//import pool from "./configs/connectDB"
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
configViewEngine(app);
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", ".ejs");
app.set("views", path.join(__dirname, "./views"));

initWebRouter(app)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
