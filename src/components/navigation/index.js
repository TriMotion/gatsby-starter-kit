import React from 'react';
import NavigationMobile from "./navigation-mobile";
import NavigationDesktop from "./navigation-desktop";

const Navigation = () => {
    return (
        <nav className="nav">
            <NavigationDesktop /> 
            <NavigationMobile />
        </nav>
    );
};

export default Navigation;
