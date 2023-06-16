import NavBar from "../../components/NavBar/NavBar";
import AllCards from "../../components/AllCards/AllCards";

const Home = ({eight, page, nextHandler, prevHandler})=>{
    return(
        <div>
            <NavBar/>
            <h1>Home</h1>
            <AllCards eight={eight} page={page} nextHandler={nextHandler} prevHandler={prevHandler} />
        </div>
    )
}

export default Home;