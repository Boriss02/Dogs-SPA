import './App.css';
import {Routes, Route} from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDogs } from './redux/actions';

function App() {
  const allDogs = useSelector(state=> state.allDogs);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getDogs())
  }, [dispatch]);


  // PAGINADO ---------------------------------------
  const [eight, setEight] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    setEight([...allDogs].splice(0, 8));
  }, [allDogs]);
  
  const nextHandler = ()=>{
    const totalDogs = allDogs.length;
    const nextPage = page + 1;
    const firstIndex = (nextPage - 1) * 8;
    if(firstIndex === totalDogs) return;

    setEight([...allDogs].splice(firstIndex, 8));
    setPage(nextPage);
  };
  
  const prevHandler = ()=>{
    const prevPage = page - 1;
    if(prevPage < 1) return;
    const firstIndex = (prevPage - 1) * 8;

    setEight([...allDogs].splice(firstIndex, 8));
    setPage(prevPage);
  };
  // -------------------------------------------------

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home eight={eight} page={page} nextHandler={nextHandler} prevHandler={prevHandler} />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/create" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;