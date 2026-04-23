import { Routes, Route } from "react-router-dom";
import Home from './component/Home.jsx';
import Navbar from './component/Navbar.jsx';
import About from "./component/About.jsx";
import Recommend from "./component/Recommend.jsx";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home key="home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </div>
  );
}

export default App;