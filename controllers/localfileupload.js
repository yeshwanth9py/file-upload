
const localfileupload = (req, res)=>{
    const file = req.files.file;
    console.log(file);
    // res.send("success");
    let path = __dirname+"/files/"+Date.now()+"."+file.name.split(".")[1].toLowerCase();
    console.log(path)

    file.mv(path, (err)=>{
        console.log(err);
    });
    
    res.send("success");
}

module.exports = localfileupload;