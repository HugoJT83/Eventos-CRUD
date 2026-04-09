import React from 'react'
import { AuthContextProvider } from './AuthContext'
import { AccessibilityProvider } from './AccessibilityContext'


/**
 * Envuelve la app y provee AuthContext
 */
const MainContext = ({children}) => {
  return (
    <AccessibilityProvider>
    <AuthContextProvider>
        {children}
    </AuthContextProvider>
   </AccessibilityProvider> 
  )
}

export default MainContext