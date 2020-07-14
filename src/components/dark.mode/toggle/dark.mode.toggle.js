import React from 'react';
import useDarkMode from "use-dark-mode";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './dark.mode.toggle.scss';

function renderToggleButton(darkMode) {
    if (darkMode.value) {
        return (
            <button onClick={darkMode.toggle} title="Turn on the light">
                <FontAwesomeIcon icon={faSun} size="lg"/>
            </button>
        )
    } else {
        return (
            <button onClick={darkMode.toggle} title="Turn off the light">
                <FontAwesomeIcon icon={faMoon} size="lg"/>
            </button>
        )
    }
}

export function DarkModeToggle() {
    const darkMode = useDarkMode(true);
    return (
        renderToggleButton(darkMode)
    )
}

export default DarkModeToggle;
