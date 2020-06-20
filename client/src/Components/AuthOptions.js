import React,{useContext} from 'react'
import {useHistory} from "react-router-dom"
import UserContext from '../context/UserContext';



export default function AuthOptions(){
const {userData, setUserData} = useContext(UserContext);

const history = useHistory();

const logout = () => {
    setUserData({
        token: undefined,
        user: undefined
    },history.push("/login"));
    localStorage.setItem("auth-token", "");
}
    return(
        <div>
            {
            userData.user ? 
            <button onClick={logout}>Log Out</button> :
            <>
            {/*<button onClick={register}>Register</button>
            <button onClick={login}>Log in</button>*/}
            </>
            }
        </div>
    )
}


