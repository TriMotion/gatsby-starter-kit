import React from "react";
import { graphql } from 'gatsby';
import { useSpring, animated } from "react-spring";
import { RichText } from 'prismic-reactjs';

import "intersection-observer";

// COMPONENTS
import Head from "../components/head/head";
import Header from "../components/header/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer/footer";
import Card from "../components/cards/card";


export const query = graphql`
{
  prismic {
	allPages(uid: null) {
      edges {
        node {
          page_title
        }
      }
    }
  }
}
`

export default ({data}) => {

    const doc = data.prismic.allPages.edges.slice(0,1).pop();
    // const posts = data.prismic.allPosts.edges;
    if(!doc) return null;

    const fade =  useSpring({
        from: {
            opacity: 0
        },
        opacity: 1
    });

    return (
        <div className="grid" style={{ color: `purple` }}>
            <Head title="Gatsby Starter Kit" />
            <Navigation />
            <Header headerText="Header" />
            <h1>{RichText.asText(doc.node.page_title)}</h1>
            <section>
                <animated.div className="row flex-space" style={fade}>
                    <Card title="Business Canvas" />
                    <Card title="Empathy map" />
                    <Card title="Context Canvas" />
                    <Card title="Customer Journey" />
                </animated.div>
            </section>
            <Footer />
        </div>
    );
}