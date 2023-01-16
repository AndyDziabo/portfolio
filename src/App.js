import NavBar from './components/NavBar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [target, setTarget] = useState('');

  let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
  });
  console.log(vh)
  return (
    <div id='app' >
        <NavBar setTarget={setTarget} />
        <Main target={target} />
    </div>
  );
}

export default App;
