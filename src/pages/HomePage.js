import React from "react";
import Banner from "../components/Banner";
import AboutUsSummary from "../components/AboutUsSummary";
import ServicesList from "../components/ServicesList";
// import Team from "../components/Team";
import FAQs from "../components/FAQs";
import Team2 from "../components/Team-2";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutUsSummary />
      <ServicesList />
      <Team2 />
      <FAQs />
      {/* <Team /> */}
      <hr></hr>
    </div>
  );
};

export default HomePage;
