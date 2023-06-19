import NavBar from "../../components/NavBar/NavBar";
import AllCards from "../../components/AllCards/AllCards";

const Home = ({eight, page, nextHandler, prevHandler, allTemps, handlerTemps, handlerPlace, handlerABC, handlerWeight, filteredDogs, setBeta})=>{
    return(
        <div>
            <NavBar/>
            <h1>Home</h1>
            <AllCards eight={eight} page={page} nextHandler={nextHandler} prevHandler={prevHandler} allTemps={allTemps} handlerTemps={handlerTemps} handlerPlace={handlerPlace} handlerABC={handlerABC} handlerWeight={handlerWeight} filteredDogs={filteredDogs} setBeta={setBeta} />
        </div>
    )
}

export default Home;