import React from "react";
import Header from "./Components/Header";
import Footer from "../../Components/Footer";
import Materials from "./Components/Materials";
import './style.css';

class Profilepage extends React.Component{
  render(){
    return (
      <div className="wrapper">
        <Header />
        <Materials />
        <Footer />
      </div>
    )
  }
}

export default Profilepage;
