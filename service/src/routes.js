const express = require("express");
const routes = express.Router();

const ToolsController = require('./controlers/ToolsController');


routes.get('/tools', ToolsController.index);
routes.post('/tools', ToolsController.store);
routes.delete('/tools/:id', ToolsController.delete);


module.exports = routes;
