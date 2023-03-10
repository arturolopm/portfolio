import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Images from "./components/Images";

const App = () => {
  return (
    <div className=" flex flex-col gap-y-4 bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Images />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
