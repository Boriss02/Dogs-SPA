const dogsRouter = require("express").Router();
const {getDogs, getIdApi, getIdBD} = require("../controllers/index");

dogsRouter.get("/", async (req, res)=>{
    try {
        const allDogs = await getDogs();
        res.status(200).json(allDogs);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


dogsRouter.get("/:idRaza", async (req, res)=>{
    const {idRaza} = req.params;
    if(isNaN(idRaza)){
        return 
    } else {
        try {
            const detail = await getIdApi(idRaza);
            res.status(200).json(detail);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
});


// dogsRouter.get("/name?=", async (req, res)=>{

// });


dogsRouter.post("/", async (req, res)=>{

});

module.exports = dogsRouter;