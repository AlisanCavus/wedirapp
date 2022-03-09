import React, {useState, useEffect} from "react";

const getInitialTheme = () => {
    if (window.localStorage && typeof window !== 'undefined') {
        const storedPrefs = window.localStorage.getItem('current-theme');
        if(typeof storedPrefs === 'string') {
            return storedPrefs
        }
        if ( window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
    }
    return 'light'
}

export const ThemeProvider = ({initialTheme, children}) => {
    const [ theme, setTheme ] = useState(getInitialTheme)

    const checkTheme: any = ( existing: any) => {
        const root = window.document.documentElement
        const isDark = existing === " dark "

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(existing)

        localStorage.setItem('current-theme', existing)

        if (initialTheme) {
            checkTheme(initialTheme)
        }

    }

    
}