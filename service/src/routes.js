const express = require("express");
const routes = express.Router();

const ToolsController = require('./controlers/ToolsController');


routes.get('/tools', ToolsController.index);
routes.post('/tools', ToolsController.store);
routes.get('/tools/:id', ToolsController.show);
routes.delete('/tools', ToolsController.delete);
//routes.put('tools',ToolsController. );




module.exports = routes;