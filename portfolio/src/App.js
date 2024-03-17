import React from "react";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/navbar/banner/Banner";
// import Features from "./components/navbar/features/Features";
import Connect from "./components/navbar/connect/Connect";
import Project from "./components/navbar/project/Project";
import Resume from "./components/navbar/resume/Resume";
import FooterBottom from "./components/navbar/footer/FooterBottom";

function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className="max-w-screen-2xl  mx-auto px-16">
        <NavBar />
        <Banner />
        {/* <Features /> */}
        <Project />
        <Resume />
        <Connect />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
