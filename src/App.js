import { Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Resume from "./components/Resume";

function App() {
  return (
    <div >
      <NavBar />
      <div className="main-container">
        <SideBar />
        <Main />
      </div>
      
    </div>
  );
}

export default App;
