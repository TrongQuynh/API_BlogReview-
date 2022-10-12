const express = require("express");
const router = require("./routers/index");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router(app);

app.listen(PORT, function(){
    console.log("Server running at: http://localhost:8080");
})