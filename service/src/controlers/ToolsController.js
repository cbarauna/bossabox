const Tools = require("../models/Tools");


module.exports = {
    async index(req, res) {
        const tools = await Tools.find(req.query).sort('-creat')
        return res.json(tools);
    },
    async store(req, res) {
        const tools = await Tools.create(req.body);
        res.json(tools);
    },
    async delete(req, res) {
        const tools = await Tools.findById(req.params.id);
        await tools.delete();
        return res.json(
             await Tools.find({}).sort('-creat')
        );
    }
};
