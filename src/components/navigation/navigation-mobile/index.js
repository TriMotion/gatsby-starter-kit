import React, { useState } from 'react';

// Components
import { ToggleButton } from "./btn-toggle";
import Navigation from "./modal";

export default () => {
    const [open, toggle] = useState(false);
    return (
        <div>
            <div className="flex flex-align flex-end nav-mobile border">
                <ToggleButton open={open} toggle={toggle} />
            </div>
            <Navigation open={open} toggle={toggle} />
        </div>
    );
};