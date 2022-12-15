import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Main from './components/Main';

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
