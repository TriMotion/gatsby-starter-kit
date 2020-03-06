import React, { useRef } from 'react';
import { Link } from 'gatsby';
import {
    animated,
    useTransition,
    useSpring,
    useChain,
    config
} from "react-spring";

// Variables
import { routes } from "../config";

const Modal = ({ open, toggle }) => {
    const springRef = useRef();
    const transRef = useRef();

    const spring = useSpring({
        ref: springRef,
        config: config.stiff,
        unique: true,
        from: { height: "0vh", opacity: 0 },
        to: {
            height: open ? "100vh" : "0vh",
            opacity: open ? 1 : 0
        }
    });

    const trails = useTransition(open ? routes : [], item => item.name, {
        ref: transRef,
        unique: true,
        trail: 200 / routes.length,
        from: { opacity: 0, transform: "translate3d(0,100px,0)" },
        enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
        leave: { opacity: 0, transform: "translate3d(0,-50px,0)" }
    });

    useChain(open ? [springRef, transRef] : [transRef, springRef], [
        0,
        open ? 0.2 : 0.3
    ]);

    return [
        <animated.div
            key="0"
            className="overlay nav-mobile-overlay"
            style={spring}
        ></animated.div>,
        <div 
            key="1" 
            className="nav-mobile-links" 
            tabIndex={0} 
            role="button" 
            onKeyDown={() => toggle(!open)} 
            onClick={() => toggle(!open)}>
            {trails.map(({ item, key }) => (
                <Link
                    key={key}
                    to={item.href}
                    {...item}
                >{item.name}</Link>
            ))}
        </div>
    ];
};

export default Modal;
