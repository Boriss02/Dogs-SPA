import NavBar from "../../components/NavBar/NavBar";
import AllCards from "../../components/AllCards/AllCards";

const Home = ({allDogs})=>{
    return(
        <div>
            <NavBar/>
            <h1>Home</h1>
            <AllCards allDogs={allDogs}/>
        </div>
    )
}

export default Home;