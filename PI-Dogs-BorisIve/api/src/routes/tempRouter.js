const tempRouter = require("express").Router();
const {getTemps} = require("../controllers/index");

tempRouter.get("/", async (req, res)=>{
    try {
        const temps = await getTemps();
        res.status(200).json(temps);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

module.exports = tempRouter;