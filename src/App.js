import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import User from "./components/User";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<User />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech" element={<Tech/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
