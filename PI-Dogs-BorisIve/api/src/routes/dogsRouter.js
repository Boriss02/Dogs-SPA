const dogsRouter = require("express").Router();
const {getDogs, getIdApi, getIdBD, getDogsName, postDog} = require("../controllers/index");

dogsRouter.get("/", async (req, res)=>{
    const {name} = req.query;
    if(name){
        try {
            const dogsName = await getDogsName(name);
            res.status(200).json(dogsName);
        } catch (error) {
            res.status(500).json(error.message);
        }
    } else {
        try {
            const allDogs = await getDogs();
            res.status(200).json(allDogs);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
});


dogsRouter.get("/:idRaza", async (req, res)=>{
    const {idRaza} = req.params;
    if(isNaN(idRaza)){
        try {
            const detail = await getIdBD(idRaza);
            res.status(200).json(detail);
        } catch (error) {
            res.status(500).json(error.message);
        }
    } else {
        try {
            const detail = await getIdApi(idRaza);
            res.status(200).json(detail);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
});


dogsRouter.post("/", async (req, res)=>{
    console.log(req.body.dog);
    const {name, height, weight, lifespan, temperaments} = req.body;
    try {
        if(!name || !height || !weight || !lifespan || !temperaments.length) throw Error("Not enough information");
        else {
            const createdDog = await postDog(name, height, weight, lifespan, temperaments);
            res.status(200).json(`Your dog: ${name}, was created succesfully`);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
});

module.exports = dogsRouter;