import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        
    }

    return (
        <div>
            <form
                className='block p-4 m-4 text-2xl bg-baltic-900'
                onSubmit={handleSubmit(onSubmit)}>
                <h1 className='p-0 m-auto text-3xl font-bold align-center text-zinc-100'>Login</h1>
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

                <button
                    className='w-full py-1 rounded-sm bg-fuchsia-350'
                    type='submit'>
                    Submit
                </button>
                <button
                    className='w-full py-1 rounded-sm bg-slate-400'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Login;