import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/"
          element={<Login />}/>
          <Route path="/header"
           element={<Header />}/>
           <Route path="/home"
           element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
