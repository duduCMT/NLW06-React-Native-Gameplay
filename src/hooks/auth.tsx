import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react'

import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { SCOPE } = process.env
const { CLIENT_ID } = process.env
const { CDN_IMAGE } = process.env
const { REDIRECT_URI } = process.env
const { RESPONSE_TYPE } = process.env

import { api } from '../services/api'
import { COLLECTION_USERS } from '../configs/database'
import { getRandomPhrase } from '../services/phrases'

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
  singOut: () => Promise<void>;
  loading: boolean,
  phrase: string,
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

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)
  const phrase = getRandomPhrase()

  async function singIn() {
    try {
      setLoading(true)

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse

      if (type === 'success' && !params.error) {
        api.defaults.headers.common['authorization'] = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me')
        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token
        }

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData))
        setUser(userData)
      }
    } catch {
      throw new Error('Não foi possível autenticar')

    } finally {
      setLoading(false)
    }
  }

  async function singOut() {
    setUser({} as User)
    await AsyncStorage.removeItem(COLLECTION_USERS)
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS)
    if(storage){
      const userLogged = JSON.parse(storage) as User
      api.defaults.headers.common['authorization'] = `Bearer ${userLogged.token}`
      
      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadUserStorageData()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      singIn,
      singOut,
      loading,
      phrase
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
