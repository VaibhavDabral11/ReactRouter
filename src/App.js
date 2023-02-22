import "./App.css";
import Login from "./Components/Login";
import Rgister from "./Components/Rgister";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Register" element={<Rgister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
