const cloudinary = require('cloudinary').v2;

const imageUpload = async (req, res)=>{

    console.log(req.files);
    const file = req.files.imageFile;
    

    // validate the extension
    const extensions = ["jpg", "jpeg", "png"];
    const ext = file.name.split(".")[1];
    // console.log(ext.includes(extensions))
    if(extensions.includes(ext) != true){
        res.json({
            msg: "error in extension"
        });

    }
    // upload it to cloudinary
    const options = {folder: "folder"};
    try{
        console.log(file.tempFilePath)
        const resp = await cloudinary.uploader.upload(file.tempFilePath, options);
        console.log(resp);
        res.json({
            msg: "file uploaded successfully"
        })
    } catch(err) {
        console.error(err);
    }

}

module.exports = imageUpload;