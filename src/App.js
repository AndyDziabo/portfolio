import NavBar from './components/NavBar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [target, setTarget] = useState('');

  return (
    <div id='app' >
        <NavBar setTarget={setTarget} />
        <Main target={target} />
    </div>
  );
}

export default App;
