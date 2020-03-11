import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";

const Toggle = () => {
    const [ isToggled, setToggle] = useState(false);
    const fade = useSpring({
      opacity: isToggled ? 1 : 0,
      color: isToggled ? '#000' : 'green'
    })

    return (
        <div>
            <animated.h1 style={fade}>Hello</animated.h1>
            <button className="button" onClick={() => setToggle(!isToggled)}>
                Toggle
            </button>
        </div>
    );
}

export default Toggle;
