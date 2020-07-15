function isSystemDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default {
    isSystemDarkMode: isSystemDarkMode
}
