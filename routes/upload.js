const express = require('express');
const imageUpload = require('../controllers/imageUpload');
const videoUpload = require('../controllers/videoUpload');
const compressFileUpload = require('../controllers/compressFileUpload');
const router = express.Router();

router.post("/imageUpload", imageUpload)
router.post("/videoUpload", videoUpload)
router.post("/compressFileUpload", compressFileUpload)

module.exports = router;
