import Card from "../Card/Card";
import { useState, useEffect } from "react";

const AllCards = ({allDogs})=>{
    // const [page, setPage] = useState(1);
    // const dogsPerPage = 8;
    // const startIndex = (page - 1) * dogsPerPage;
    // const endIndex = page * dogsPerPage;
    // const dogsToShow = allDogs.slice(startIndex, endIndex);
  
    // useEffect(() => {
    //   setPage(1); // Reiniciar la página cuando cambie `allDogs`
    // }, [allDogs]);
  
    // const nextHandler = () => {
    //   const totalDogs = allDogs.length;
    //   const totalPages = Math.ceil(totalDogs / dogsPerPage);
    //   if (page < totalPages) {
    //     setPage(page + 1);
    //   }
    // };
  
    // const prevHandler = () => {
    //   if (page > 1) {
    //     setPage(page - 1);
    //   }
    // };


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


    return(
        <div>
            {
                eight.map((dog)=>{
                    console.log(dog.id);
                    return(
                        <Card
                            key={dog.id}
                            id={dog.id}
                            image={dog.image}
                            name={dog.name}
                            temperament={dog.temperament}
                            weight={dog.weight}
                        />
                    )
                })
            }

            <button onClick={prevHandler} disabled={page === 1} >PREV</button>
            <h2>{page}</h2>
            <button onClick={nextHandler} disabled={eight.length < 8} >NEXT</button>
        </div>
    )
}

export default AllCards;