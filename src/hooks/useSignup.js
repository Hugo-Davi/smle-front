import { useState } from "react";
import { useAuthContext } from './useAuthContext'
import AuthService from "../services/auth.service";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext()

    const signup = async (model) => {
        setIsLoading(true);
        setError(null);

        const resRegister = await AuthService.register(model);
        const response = await AuthService.login(model);

        const json = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok){
            // save user in the local storage
            localStorage.setItem('user', JSON.stringify(json));

            // update AuthContext
            dispatch({ type: 'LOGIN', payload: json });
            setIsLoading(false);
        }
    }

    return { signup, isLoading, error }
}