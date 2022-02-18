import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SearchPage from './SearchPage';
import { useState } from 'react';



function App() {
  const [input,setInput]=useState("");

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home input={input} setInput={setInput}/>}/>
        
      <Route path="/search" element={<SearchPage input={input} setInput={setInput} />}/>
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
