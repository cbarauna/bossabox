const moongose = require('mongoose');

const ToolsSchema = new moongose.Schema({
title: String,
link: String,
description: String,
creat: {
    type: Date,
    default: Date.now,
},
tag:[]

});

module.exports = moongose.model("Tool", ToolsSchema);