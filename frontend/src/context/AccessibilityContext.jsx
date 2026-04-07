import React, { createContext, useContext, useEffect, useState } from 'react'

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({children}) => {
  
    const [config,setConfig] = useState(()=>{
            const saved = localStorage.getItem('app_accesibility');
            return saved ? JSON.parse(saved) : {
                fontSize: 'small',
                highContrast: false,
                dyslexicFont: false
            };
        });

    useEffect(()=>{
        localStorage.setItem('app_accesibility', JSON.stringify(config));


        const root = window.document.documentElement;

        if(config.highContrast)
            root.classList.add('high-contrast');
        else
            root.classList.remove('high-contrast');

        
        if(config.dyslexicFont)
            root.classList.add('font-dyslexic');
        else
            root.classList.remove('font-dyslexic');

        root.setAttribute('data-size',config.fontSize)
    },[config]);
  
    return (
        <AccessibilityContext.Provider value={{config, setConfig}}>
             {children}
        </AccessibilityContext.Provider>
  )
}

export const useAccessibility = () => useContext(AccessibilityContext);