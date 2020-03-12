import { useLocaleStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useLocaleStorage('isOn')

    useEffect(() => {
        if (isDarkMode) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [isDarkMode])
    return [isDarkMode, setIsDarkMode]
}