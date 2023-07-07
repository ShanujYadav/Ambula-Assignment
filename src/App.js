import './App.css';
import API from './components/API';
import About from './components/About';
import Contect from './components/Contect';
import Home from './components/Home';
import Navbars from './components/Navbars';
import Shopping from './components/Shopping';
import TodoList from "./components/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<API />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/shoppingCart" element={<Shopping />} />
        <Route path="/contact" element={<Contect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
