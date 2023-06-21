import NavBar from "../../components/NavBar/NavBar";
import AllCards from "../../components/AllCards/AllCards";
import { useEffect } from "react";

const Home = ({eight, page, nextHandler, prevHandler, allTemps, handlerTemps, handlerPlace, handlerABC, handlerWeight, filteredDogs, setBeta, setPage, allDogs})=>{
    useEffect(()=>{
        setBeta([...allDogs]);
        setPage(1);
    }, [setBeta, allDogs, setPage]);

    return(
        <div>
            <NavBar/>
            <h1>HOME</h1>
            <br />
            <AllCards eight={eight} page={page} nextHandler={nextHandler} prevHandler={prevHandler} allTemps={allTemps} handlerTemps={handlerTemps} handlerPlace={handlerPlace} handlerABC={handlerABC} handlerWeight={handlerWeight} filteredDogs={filteredDogs} setBeta={setBeta} setPage={setPage} />
        </div>
    )
}

export default Home;