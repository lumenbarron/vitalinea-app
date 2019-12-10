import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Family } from './components/Family';
import { Footer } from './components/Footer';
import './styles/app.css';

function App() {
  return (
    <div className="App">
<Header />
<Main />
<Family />
<Footer />
{/* <img src={imgFresa7} alt="imgFresa7"></img> */}
    </div>
  );
}

export default App;
