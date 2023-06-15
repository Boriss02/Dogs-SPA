import './App.css';
import {Routes, Route} from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDogs } from './redux/actions';

function App() {
  const allDogs = useSelector(state=> state.allDogs);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getDogs())
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home allDogs={allDogs} />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/create" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;