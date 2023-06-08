const axios = require("axios");
const {Dog, Temperament} = require("../db");
require('dotenv').config();
const {API_KEY} = process.env;
const URL = `https://api.thedogapi.com/v1/breeds`;
const searchRaza = "https://api.thedogapi.com/v1/breeds/search?q=";

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
    })
    console.log(niceApi);
    return niceApi;
};


// GET | /dogs/:idRaza, obtiene el detalle de una raza especifica, debe funcionar tanto para la API com para la BD.
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
            life_span: ApiDog.life_span
        }
    } else {
        throw Error("No se encontró un perro con ese ID")
    }
};

const getIdBD = async (id)=>{

};


// GET | /dogs/name?="...", trae tanto de la API como de la BD los perros que coincidan con el name pasado por query. No distingue entre mayusculas o minusculas.
const getDogsName = async (name)=>{

};

module.exports = {
    getDogs,
    getIdApi,
    getIdBD,
}