import React from "react";
import Nav from "./components/Nav";
import AllyourFile from "./components/AllyourFile";
import StayProductive from "./components/StayProductive";
import GetEarly from "./components/GetEarly";
import Footer from "./components/Footer";





function App() {

  return (
    <div className="flex flex-col min-h-screen text-very-dark-Blue">
      <Nav />
      <AllyourFile />
      <StayProductive/>
      <GetEarly />
      <Footer/>
      
    </div>
  );
}

export default App;
