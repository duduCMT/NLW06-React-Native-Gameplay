import React, { createContext, ReactNode, useContext, useState } from 'react'

type User = {
  id: string;
  username: string;
  fistName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
}

const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<User>({} as User)

  return (
    <AuthContext.Provider value={{
      user  
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}
