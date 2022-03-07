import { createContext,useState } from "react";
import { User, ProviderUser } from '../interfaces/interfaces';


interface Prop{
    children:JSX.Element | JSX.Element[]
}

const setUsuario:ProviderUser ={
    User_info:null,
    user:false,
    changeUser:()=>{}
}
const usuario:User = {
    name:'',
    lastName:'',
    userName:'',

}



const AuthContext=createContext<ProviderUser>({} as ProviderUser);

export const AuthProvider=({children}:Prop)=>{

    const [user,setUser]=useState<User>(usuario)

    const changeUser=(name:string,lastName:string,userName:string)=>{
        setUser({
            ...user,
            name, lastName, userName
        })
        setUsuario.user=true;
    }

    return (
        <AuthContext.Provider value={{ User_info:user,user:false,changeUser}}>
            {children}
        </AuthContext.Provider>
    )



}


export default AuthContext;