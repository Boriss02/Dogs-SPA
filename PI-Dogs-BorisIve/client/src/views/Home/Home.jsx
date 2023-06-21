import NavBar from "../../components/NavBar/NavBar";
import AllCards from "../../components/AllCards/AllCards";

const Home = ({eight, page, nextHandler, prevHandler, allTemps, handlerTemps, handlerPlace, handlerABC, handlerWeight, filteredDogs, beta, setBeta, setEight})=>{
    return(
        <div>
            <NavBar/>
            <h1>HOME</h1>
            <br />
            <AllCards eight={eight} page={page} nextHandler={nextHandler} prevHandler={prevHandler} allTemps={allTemps} handlerTemps={handlerTemps} handlerPlace={handlerPlace} handlerABC={handlerABC} handlerWeight={handlerWeight} filteredDogs={filteredDogs} setBeta={setBeta} />
        </div>
    )
}

export default Home;