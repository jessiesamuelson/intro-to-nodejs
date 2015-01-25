"use strict";
var _ = require("lodash");
var config = {};

if (process.env.NODE_ENV === "production") {
	_.merge(config, require("./prod"));
}

if (process.env.NODE_ENV === "development") {
	_.merge(config, require("./dev"));
}

//config.mongo.connect = "mongodb://" + ((config.mongo.un) ? config.mongo.un + ":" : "") + ((config.mongo.pw) ? config.mongo.pw + "@" : "") + config.mongo.host + ((config.mongo.port) ? ":" + config.mongo.port : "") + "/" + config.mongo.db;

module.exports = config;
