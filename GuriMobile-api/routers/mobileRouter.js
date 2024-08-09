const express = require("express");
const { getAllMobile, createMobile, getSingleMobile } = require("../controllers/mobileControllers");
const  Router =express.Router();



Router.get('/',getAllMobile);
Router.get("/findSingle",getSingleMobile)
Router.post('/createmobile',createMobile);

module.exports = Router;

























