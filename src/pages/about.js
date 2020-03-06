import React from "react";
import Header from "../components/header/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer/footer";

export default () => (
  <div style={{ color: `teal` }}>
    <Navigation />
    <Header headerText="Header" />
    <Footer />
  </div>
)
