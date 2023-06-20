import './App.css';
import {Routes, Route} from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDogs, getTemps } from './redux/actions';
import { filtTemps, filtPlace, filtABC, filtWeight } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const allDogs = useSelector(state=> state.allDogs);
  const allTemps = useSelector(state=> state.allTemps);
  const filteredDogs = useSelector(state=> state.filteredDogs);
  
  useEffect(()=>{
    dispatch(getDogs())
    dispatch(getTemps())
  }, [dispatch]);


  // PAGINADO ---------------------------------------
  const [beta, setBeta] = useState([]);
  const [eight, setEight] = useState([...beta]);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    setBeta([...allDogs]);
  }, [allDogs]);

  useEffect(()=>{
    setEight([...beta].splice(0, 8))
  }, [beta]);
  
  const nextHandler = ()=>{
    const totalDogs = beta.length;
    const nextPage = page + 1;
    const firstIndex = (nextPage - 1) * 8;
    if(firstIndex === totalDogs) return;

    setEight([...beta].splice(firstIndex, 8));
    setPage(nextPage);
  };
  
  const prevHandler = ()=>{
    const prevPage = page - 1;
    if(prevPage < 1) return;
    const firstIndex = (prevPage - 1) * 8;

    setEight([...beta].splice(firstIndex, 8));
    setPage(prevPage);
  };
  // -------------------------------------------------

  // FILTROS -----------------------------------------
  const handlerTemps = ()=>{

  };

  const handlerPlace = (event)=>{
    dispatch(filtPlace(event.target.value));
  };

  const handlerABC = (event)=>{
    dispatch(filtABC(event.target.value));
  };

  const handlerWeight = (event)=>{
    dispatch(filtWeight(event.target.value));
  };


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />

        <Route path="/home" element={<Home eight={eight} page={page} nextHandler={nextHandler} prevHandler={prevHandler} allTemps={allTemps} handlerTemps={handlerTemps} handlerPlace={handlerPlace} handlerABC={handlerABC} handlerWeight={handlerWeight} filteredDogs={filteredDogs} setBeta={setBeta} setEight={setEight} />} />

        <Route path="/detail/:id" element={<Detail/>} />

        <Route path="/create" element={<Form allTemps={allTemps} />} />
      </Routes>
    </div>
  );
}

export default App;