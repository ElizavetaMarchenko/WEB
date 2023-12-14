import React from "react";
import Header from "./Components/Header";
import Footer from "../../Components/Footer";
import Materials from "./Components/Materials";
import './style.css';
import { useLocation } from 'react-router-dom'

const Profilepage = () =>{
    const location = useLocation()
    console.log(location.state.id)
    return (
      <div className="wrapper">
        <Header />
        <Materials id = {location.state.id}/>
        <Footer />
      </div>
    )
}

export default Profilepage;
