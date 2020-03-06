import React from "react";
import Header from "../components/header/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer/footer";

import "intersection-observer";

// COMPONENTS
import Card from "../components/cards/card";

export default () => (
  <div className="grid" style={{ color: `purple` }}>
    <Navigation />
    <Header headerText="Header" />
    <section>
        <div className="row flex-space">
            <Card title="Business Canvas" />
            <Card title="Empathy map" />
            <Card title="Context Canvas" />
            <Card title="Customer Journey" />
        </div>
    </section>
    <Footer />
  </div>
)