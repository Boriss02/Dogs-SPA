import Card from "../Card/Card";

const AllCards = ({eight, page, nextHandler, prevHandler})=>{
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