import React from 'react'
import { useForm } from "react-hook-form";
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
    const { register, handleSubmit } = useForm()
    const { signup, isLoading, error } = useSignup();

    const onSubmit = async (data) => {
        await signup(data);
    }

    return (
        <div className='m-auto'>
        <form
            className='block w-11/12 p-4 m-auto text-2xl bg-baltic-900 md:w-1/3'
            onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-3xl font-bold text-center text-zinc-100'>Sign Up</h1>
            <div
                className='mx-auto my-4 md:w-5/6'>
                <label className='font-bold' htmlFor='username'>User</label>
                <input
                    className='w-full p-1 text-black rounded-sm bg-baltic-50'
                    placeholder='user da silva'
                    type='text'
                    name='username'
                    { ... register('username') }
                />

                <label className='font-bold' htmlFor='password'>Password</label>
                <input
                    className='w-full p-1 text-black rounded-sm bg-baltic-50'
                    placeholder='password123'
                    type='password'
                    name='password'
                    { ... register('password') }
                />

                <label className='font-bold' htmlFor='passwordAgain'>Password again</label>
                <input
                    className='w-full p-1 text-black rounded-sm bg-baltic-50'
                    placeholder='password123'
                    type='password'
                    name='passwordAgain'
                />
            </div>
            <div
                className='w-full mx-auto my-2 font-bold text-black md:w-2/3'>
                <button
                    className='w-full py-1 mt-2 rounded-sm bg-fuchsia-350'
                    type='submit'>
                    Sign Up
                </button>
                <button
                    className='w-full py-1 mt-2 rounded-sm bg-slate-400'>
                    Log In
                </button>
            </div>
        </form>
    </div>
    )
}

export default Signup;