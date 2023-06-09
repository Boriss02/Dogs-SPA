const dogsRouter = require("express").Router();
const {getDogs, getIdApi, getIdBD, getDogsName, postDog} = require("../controllers/index");

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


dogsRouter.get("/name", async (req, res)=>{
    
});


dogsRouter.post("/", async (req, res)=>{
    console.log(req.body.dog);
    const {name, height, weight, lifespan, temperaments} = req.body.dog;
    try {
        if(!name || !height || !weight || !lifespan || !temperaments.length) throw Error("Falta enviar información");
        else {
            const createdDog = await postDog(name, height, weight, lifespan, temperaments);
            res.status(200).json(`El perro: ${createdDog}, fue creado exitosamente.`);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
});

module.exports = dogsRouter;