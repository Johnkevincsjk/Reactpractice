import React, { useEffect, useState } from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
import NavBar from './Components/Nav/Nav'
import Banner from "./Components/Banner/Banner";
import Comics from "./Components/Comics/Comics";
import Videos from "./Components/Videos/Videos";

function App() {


  return (
    <div className="App">

      <section >
        <NavBar />
        <Banner />
      </section>
      <section>
        <Comics />
      </section>
      <section>
        <Videos />
      </section>



    </div>
  );
}

export default App;
