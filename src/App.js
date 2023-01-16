import NavBar from './components/NavBar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [target, setTarget] = useState('');
  return (
    <div id='app' >
      <div className='nav-container'>
        <NavBar setTarget={setTarget} />
      </div>
      <div className='main-container'>
        <Main target={target} />
      </div>
       
    </div>
  );
}

export default App;
