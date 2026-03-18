import { registerUser, loginUser, getMeUser} from "../services/auth.api";
import {setUser, setLoading, setError } from "../auth.slice";
import { useDispatch } from "react-redux";

export const useAuth = ()=>{

    const dispatch = useDispatch();

    const handleRegister = async ({username, email, password}) =>{
        try{
            dispatch(setLoading(true));
            await registerUser({username, email, password});
        }catch(err){
            dispatch(setError(err.response?.data?.message) || "Registration Failed!");
        }finally{
            dispatch(setLoading(false));
        }
    }

    const handleLogin = async ({email, password}) =>{
        try{
            dispatch(setLoading(true));
            const data = await loginUser({email, password});
            dispatch(setUser(data.user));
        }catch(err){
            dispatch(setError(err.response?.data?.message) || "Login Failed!");
        }finally{
            dispatch(setLoading(false));
        }
    }


    const handleGetMe = async ()=>{
        try{
            dispatch(setLoading(true));
            const data = await getMeUser();
            dispatch(setUser(data.user));
        }catch(err){
            dispatch(setError(err.response?.data?.message) || "Failed to fetch user data");
        }finally{
            dispatch(setLoading(false));
        }
    }

    return {
        handleRegister,
        handleLogin,
        handleGetMe
    }
}