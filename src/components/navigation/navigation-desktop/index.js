import React from 'react';
import { Link } from 'gatsby';

// Variables
import { routes } from "../config";

export default () => (
    <div className="flex flex-space nav-desktop pt-m pb-m pl-l pr-l border">
        <h1>desktop</h1>
        {routes.map((item, index) => (
            <Link key={index} to={item.href}>{item.name}</Link>
        ))}
    </div>
);