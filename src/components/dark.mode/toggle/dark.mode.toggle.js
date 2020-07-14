import React from 'react';
import useDarkMode from "use-dark-mode";


function renderToggleButton(darkMode) {
    if (darkMode.value)
        return <button onClick={darkMode.toggle}> Click for light </button>;
    else
        return <button onClick={darkMode.toggle}> Click for dark </button>;
}

export function DarkModeToggle() {
    const darkMode = useDarkMode(true);
    return (
        renderToggleButton(darkMode)
    )
}

export default DarkModeToggle;
