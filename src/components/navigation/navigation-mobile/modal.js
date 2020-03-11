import React from 'react';
import { Link } from 'gatsby';
import {
    animated,
    useSpring,
} from "react-spring";

// Variables
import { routes } from "../config";

const Modal = ({ open, toggle }) => {
    const fade = useSpring({
      opacity: open ? 1 : 0,
      color: open ? '#000' : 'green'
    })

    return (
        <animated.div className="overlay nav-mobile-overlay" style={fade} onClick={() => toggle(!open)} onKeyDown={() => toggle(!open)} >
            {routes.map((item, index) => (
                <Link key={index} to={item.href}>{item.name}</Link>
            ))}
        </animated.div>
    );
};

export default Modal;
