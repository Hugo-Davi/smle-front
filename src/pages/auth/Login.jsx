import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='username'>User</label>
                <input
                    type='text'
                    name='username'
                    { ... register(username) }
                />

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    { ... register(password) }
                />

                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login;