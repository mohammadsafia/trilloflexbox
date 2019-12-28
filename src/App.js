import React from "react";
import Header from "./components/header/header.component";
import SideBar from "./components/sidebar/sidebar.component";
import Main from "./components/main/main.component";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
