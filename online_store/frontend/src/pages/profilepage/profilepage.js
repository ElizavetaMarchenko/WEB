import React from "react";
import Header from "./Components/Header";
import Footer from "../../Components/Footer";
import Materials from "./Components/Materials";
import './style.css';
import {Helmet} from "react-helmet";
import { useLocation } from 'react-router-dom'

const Profilepage = () =>{
  const location = useLocation()
  console.log(location.state.id)
  return (
    <div className="wrapper">
      <Helmet><title>Profile</title></Helmet>
      <Header />
      <Materials id={location.state.id}/>
      <Footer />
    </div>
  )
}

export default Profilepage;
