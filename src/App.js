import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header.component";
import SideBar from "./components/sidebar/sidebar.component";
import Main from "./components/main/main.component";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="content">
          <SideBar />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
