import { createContext, ReactNode, useState, useEffect } from "react";
import * as WebBrowser from 'expo-web-browser'
import * as AuthSession from 'expo-auth-session'
import * as Google from 'expo-auth-session/providers/google'

WebBrowser.maybeCompleteAuthSession();
interface UserProps{
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: ()=>Promise<void>;
  isUserLoading: boolean;
}

interface AuthProviderProps{
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({children}:AuthProviderProps){

  const [user, setUser] = useState<UserProps>({} as UserProps)

  const [isUserLoading, setIsUserLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '486063134902-hrb9836bro8p6ilj358tgif9gi8jdd6o.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri({useProxy: true}),
    scopes: ['profile', 'email']
    
  })

  async function signIn(){
    try {

      setIsUserLoading(true)
      await promptAsync();

    } catch (error) {
      console.log(error);
      throw error;
    }finally{

      setIsUserLoading(false)

    }
  }
  
  async function signWithGoogle(access_token:string) {
    console.log('token de autenticação ===>', access_token)
  }

  useEffect(()=>{
    if(response?.type === 'success' && response.authentication?.accessToken){
      signWithGoogle(response.authentication.accessToken)
    }
  }, [response])

  return (
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user
      }}>
        {children}
    </AuthContext.Provider>
  )

}