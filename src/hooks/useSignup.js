import { useState } from "react";
import { useAuthContext } from './useAuthContext'
import AuthService from "../services/auth.service";

const useSignup = async () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext()

    const signup = async (model) => {
        setIsLoading(true);
        setError(null);

        const response = await AuthService.register(model);

        const json = response.json();

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

export default useSignup