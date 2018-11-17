const express = require("express");
const routes = express.Router();

const ToolsController = require('./controlers/ToolsController');


routes.get('/tools', ToolsController.index);
routes.get('/tools/tag/:tag', ToolsController.findTag);

routes.post('/tools', ToolsController.store);
routes.get('/tools/:id', ToolsController.show);
routes.delete('/tools/:id', ToolsController.delete);
//routes.put('tools',ToolsController. );




module.exports = routes;
