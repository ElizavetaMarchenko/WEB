import React from "react";
import Header from "./Components/Header";
import Footer from "../../Components/Footer";
import Materials from "./Components/Materials";
import './style.css';
import {Helmet} from "react-helmet";

class Profilepage extends React.Component{
  render(){
    return (
      <div className="wrapper">
        <Helmet><title>Profile</title></Helmet>
        <Header />
        <Materials />
        <Footer />
      </div>
    )
  }
}

export default Profilepage;
