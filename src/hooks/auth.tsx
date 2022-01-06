import React, { createContext, ReactNode, useContext, useState } from 'react'

import * as AuthSession from 'expo-auth-session'

import {
  SCOPE,
  CLIENT_ID,
  CDN_IMAGE,
  REDIRECT_URI,
  RESPONSE_TYPE
} from '../configs'

import { api } from '../services/api'

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  singIn: () => Promise<void>;
  loading: boolean
}

const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  }
}

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  async function singIn (){
    try {
      setLoading(true)

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse
      
      if(type === 'success' && !params.error){
        api.defaults.headers.common['authorization'] = `Bearer ${params.access_token}`
        
        const userInfo = await api.get('/users/@me')
        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token
        })
      } 
    } catch {
      throw new Error('Não foi possível autenticar')

    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      singIn,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}
