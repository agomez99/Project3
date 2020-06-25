import React,{useContext} from 'react'
import {useHistory} from "react-router-dom"
import UserContext from '../context/UserContext';



export default function AuthOptions(){
const {userData, setUserData} = useContext(UserContext);

const history = useHistory();

const register = () => history.push("/new-user");
const login = () => history.push("/");
const logout = () => {
    setUserData({
        token: undefined,
        user: undefined
    });
    localStorage.setItem("auth-token", "");
    history.push("/")
}
    return(
        <div>
            {
                userData.user ? 
        <button onClick={logout}>Log Out</button> :
            <>
            <button onClick={register}>Register</button>
            &nbsp;
            <button onClick={login}>Log in</button>
            </>
            }
        </div>
    )
}


