const express = require("express");
const postsController = require("./controllers/posts.controller.js");

const routes = (app) => {
	app.use(express.json());
	app.use("/posts", postsController);
};

module.exports = routes;
