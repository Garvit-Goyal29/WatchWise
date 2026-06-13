import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from './component/Home.jsx';
import Navbar from './component/Navbar.jsx';
import About from "./component/About.jsx";
import Recommend from "./component/Recommend.jsx";
import Signup from './component/Signup.jsx'
import Login from './component/Login.jsx'

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home key="home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;