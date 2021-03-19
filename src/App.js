import "./App.css";
import NavBar from "./compenents/navbar/navbar";
import UserPostOpened from "./compenents/userOptions/options/userPost/userPostOpened/userPostOpened";
import UserOptions from "./compenents/userOptions/userOptions";

function App() {
    return (
        <div className="App">
            <NavBar />
            <UserOptions />
            <UserPostOpened />
        </div>
    );
}

export default App;
