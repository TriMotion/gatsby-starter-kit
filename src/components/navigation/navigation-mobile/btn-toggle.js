import * as React from "react";
import { animated, useSpring } from "react-spring";

const PathMorph = ({ open, on, off }) => {
    const { d } = useSpring({
        d: open ? on : off
    });

    return (
        <animated.path
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0%, 18%)"
            strokeLinecap="round"
            d={d}
        ></animated.path>
    );
};

const PathOpacity = ({ open }) => {
    const { opacity } = useSpring({
        opacity: open ? 0 : 1
    });

    return (
        <animated.path
            fill="transparent"
            strokeWidth="3"
            stroke="hsl(0, 0%, 18%)"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            opacity={opacity}
        ></animated.path>
    );
};

export const ToggleButton = ({ toggle, open }) => (
    <button onClick={() => toggle(!open)} className="z-index">
        <svg className="nav-mobile-btn-toggle" viewBox="0 0 23 23">
            <PathMorph
                off="M 2 2.5 L 20 2.5"
                on="M 3 16.5 L 17 2.5"
                open={open}
            />
            <PathOpacity open={open} />
            <PathMorph
                off="M 2 16.346 L 20 16.346"
                on="M 3 2.5 L 17 16.346"
                open={open}
            />
        </svg>
    </button>
);
