const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 4545;

app.listen(port, () => {
    console.log(`Slamming on ${port}`)
});

