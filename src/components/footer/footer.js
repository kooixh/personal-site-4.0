import React from 'react';
import DarkModeToggle from "@app/components/dark.mode/toggle/dark.mode.toggle";

function Footer() {
    return (
        <div className="text-center mt-3 mb-3">
            <p className="m-2  d-inline">Kooi Xiu Hong &copy; 2020</p>
            <DarkModeToggle/>
        </div>
    );
}

export default Footer;
