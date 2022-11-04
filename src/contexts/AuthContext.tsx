import { createContext } from "native-base";

interface UserProps{
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps{
  user: UserProps;
  signIn: ()=>Promise<void>
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider(){
  
}