const express = require("express");
const localfileupload = require("./controllers/localfileupload");
const fileUpload = require("express-fileupload");
const app = express();
const cloudinary_connect = require("./config/cloudinary");
const router = require("./routes/upload");


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));


cloudinary_connect();


app.use("/localfileupload", localfileupload);
app.use("/upload", router);

app.listen(3000, ()=>{
    console.log("server started listening at port 3000");
});