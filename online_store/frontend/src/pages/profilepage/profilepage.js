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
      <Header id = {location.state.id}/>
      <Materials id = {location.state.id}/>
      <Footer />
    </div>
  )
}

<<<<<<< HEAD
export default Profilepage;
=======
export default Profilepage;
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
