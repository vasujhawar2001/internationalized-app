import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/:lang?" element={<Home />} />
        <Route path="/:lang?/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
