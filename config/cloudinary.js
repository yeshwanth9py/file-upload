const cloudinary = require('cloudinary').v2;


const cloudinary_connect = async ()=>{
    await cloudinary.config({ 
        cloud_name: 'dpjftggpt', 
        api_key: '219628935774936', 
        api_secret: '-DjVbK9g02Lsxp7QJv2T9ubfCZM' 
      });
    
}

module.exports = cloudinary_connect;