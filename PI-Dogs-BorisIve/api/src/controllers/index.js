const axios = require("axios");
const {Dog, Temperament} = require("../db");
require('dotenv').config();
const {API_KEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds`;
const searchRaza = "https://api.thedogapi.com/v1/breeds/search?q=";
const imageDog = "https://lh3.googleusercontent.com/bPiMooQ3ATrdmTExzJlnlU_DVI6FviWMBgGTOmF8-5twX9tdHls33Ffs5eBrDhZEIXBSVr82ukke9lfiwomsx7oVY9pwsjz7SLTnASuQ";

// GET | /dogs, trae los perros de la API y se queda con sus propiedades: IMAGEN, NOMBRE, TEMPERAMENTOS, PESO. Los junta con los de la BD, con esas mismas propiedades.
const getDogs = async ()=>{
    const rawApi = await axios.get(`${URL}?api_key=${API_KEY}`);
    const niceApi = rawApi.data.map((dog)=>{
        return {
            image: dog.image,
            name: dog.name,
            temperament: dog.temperament,
            weight: dog.weight
        }
    });

    const rawBD = await Dog.findAll({include: Temperament});
    const niceBD = rawBD.map(dog=>{
        return {
            image: dog.image,
            name: dog.name,
            temperament: dog.temperaments.map(temp=>{
                return temp.name
            }).toString(),
            weight: dog.weight
        }
    });

    const result = [...niceBD, ... niceApi];
    console.log(niceBD);
    return result;
};


// GET | /dogs/:idRaza, obtiene el detalle de una raza especifica, debe funcionar tanto para la API como para la BD.
const getIdApi = async (idRaza)=>{
    const allApiDogs = await axios.get(`${URL}?api_key=${API_KEY}`);
    let ApiDog = allApiDogs.data.find(dog => dog.id === Number(idRaza))
    if(ApiDog){
        return {
            id: idRaza,
            image: ApiDog.image,
            name: ApiDog.name,
            height: ApiDog.height,
            weight: ApiDog.weight,
            temperament: ApiDog.temperament,
            lifespan: ApiDog.life_span
        }
    } else {
        throw Error("No se encontró un perro con ese ID")
    }
};

const getIdBD = async (idRaza)=>{
    const dogBD = await Dog.findOne({
        where: {uuid: idRaza},
        include: Temperament 
    });
    if(dogBD){
        console.log(dogBD);
        return {
            id: idRaza,
            image: dogBD.image,
            name: dogBD.name,
            height: dogBD.height,
            weight: dogBD.weight,
            temperament: dogBD.temperaments.map(temp=>{
                return temp.name
            }).toString(),
            lifespan: dogBD.lifespan
        }
    } else {
        throw Error("No se encontró un perro con ese ID");
    }
};


// GET | /dogs/name?="...", trae tanto de la API como de la BD los perros que coincidan con el name pasado por query. No distingue entre mayusculas o minusculas.
const getDogsName = async (name)=>{

};


// POST | /dogs, crea un nuevo perro con todos los datos necesarios, y lo guarda en la BD.
const postDog = async (name, height, weight, lifespan, temperaments)=>{
    const preDog = await Dog.create({
        image: imageDog,
        name: name,
        height: height,
        weight: weight,
        lifespan: lifespan
    })
    // console.log(preDog);
    const dogTemps = await Temperament.bulkCreate(temperaments);
    const result = await preDog.addTemperament(dogTemps, {through: {selfGranted: false}});
    console.log(result);
    return result;
};


// GET | /temperaments, obtiene los temperamerntos existentes de la API, y los guarda en la BD para su posterior consumo desede alli.
const getTemps = async ()=>{
    let allTemps = [];
    const allApi = await axios.get(`${URL}?api_key=${API_KEY}`);
    allApi.data.map(dog=>{
        if(dog.temperament){
            let temps = dog.temperament.split(", ");
            for(let i = 1; i < temps.length; i++){
                allTemps.push({name: temps[i]});
            }
        }
    })

    const cleanAllTemps = new Set(allTemps.map(temp => temp.name));
    const onlyNames = Array.from(cleanAllTemps);
    const result = onlyNames.map(name => ({ name }));

    const temps = await Temperament.bulkCreate(result);
    return temps;
}

module.exports = {
    getDogs,
    getIdApi,
    getIdBD,
    getDogsName,
    postDog,
    getTemps
}