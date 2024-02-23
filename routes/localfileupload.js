const express = require("express");
const localfileupload = require("../controllers/localfileupload");

const router = express.Router();

router.post("/", localfileupload);

