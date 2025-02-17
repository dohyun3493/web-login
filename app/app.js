"use strict";

//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

//한글, 공백을 읽을 때 에러가 나지 않게 방지해주는 코드..
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", home); // use -> middleware를 등록해주는 method

module.exports = app;
