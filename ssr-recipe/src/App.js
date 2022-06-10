import React from "react";
import { Routes } from "react-router-dom";
import Menu from "./component/Menu";
import RedPage from "./Pages/RedPage";
import BluePage from "./Pages/BluePage";


const App=()=>{
  return(
    <div>
      <Menu/>
      <hr/>
      <Routes path="Red" component={RedPage}></Routes>
      <Routes path="Blue" component={BluePage}></Routes>
    </div>
  )
}


export default App;
