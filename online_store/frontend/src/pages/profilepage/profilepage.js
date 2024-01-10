import React, {useState} from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Materials from "./Components/Materials";
import './style.css';
import {Helmet} from "react-helmet";
import { useLocation } from 'react-router-dom'

const Profilepage = () =>{
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation()
  console.log(location.state.id)
  return (
    <div className="wrapper">
      <Helmet><title>Profile</title></Helmet>
      <Header logCheck = {1} id = {location.state.id} setSearchTerm={setSearchTerm}/>
      <Materials id = {location.state.id}/>
      <Footer />
    </div>
  )
}

export default Profilepage;