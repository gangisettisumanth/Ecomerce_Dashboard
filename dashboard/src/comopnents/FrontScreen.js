import { createContext, useState } from 'react';
import NavgationStack from"./Pages/NavigationStack"



export const LoginInfo=createContext()


function FrontScreen() {

    const [login,setLogin] = useState(false)

    const loginUser=()=>{
        setLogin(true)
    }
    return (
        <LoginInfo.Provider value={{ login: login, loginUser: loginUser }}>
        < NavgationStack/>
        </LoginInfo.Provider>
    );
}

export default FrontScreen;