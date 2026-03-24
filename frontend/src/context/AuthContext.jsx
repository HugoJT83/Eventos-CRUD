import React, { createContext, useContext } from 'react'
import { UserSlicePath } from '../redux/slice/user.slice'
import { useSelector } from 'react-redux'

const AuthContext = createContext()

export const useAuthContext = ()=> useContext(AuthContext)

export const AuthContextProvider = ({children}) => {

    const user = useSelector(UserSlicePath)

  return (
    <AuthContext.Provider
    value={user}
    >
        {children}
    </AuthContext.Provider>
  );
}
