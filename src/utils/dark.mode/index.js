import useDarkMode from "use-dark-mode";

function isSystemDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function useThemeStatus() {
    const darkMode = useDarkMode(isSystemDarkMode());
    return darkMode.value ? 'dark' : 'light';
}

export default {
    isSystemDarkMode: isSystemDarkMode,
    useThemeStatus: useThemeStatus
}
