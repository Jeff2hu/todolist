import React , { useContext } from "react";
import { Routes, Route } from 'react-router-dom';

import LoginContext from "./State/LoginContext";
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import Todolist from "./Components/TodoList";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Choose from "./Components/RegisAndLog/Choose";
import "./style/all.css";

function App() {
  
  const LoginCtx = useContext(LoginContext)

  return (
    <React.Fragment>
      <div className="main">
        {!LoginCtx.isLogged && <Choose />}
        {LoginCtx.isLogged && 
        <div className="todoList">
          <Nav />
          <Routes>
            <Route path='/todolist/' element={<Todolist />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          </div>}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
