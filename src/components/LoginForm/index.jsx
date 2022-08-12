import { useState } from "react";

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeLogin = (e) => setLogin(e.currentTarget.value);
    const handleChangePassword = (e) => setPassword(e.currentTarget.value);
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('login', login);
        console.log('password', password);
    };

    return (
        <form  onSubmit={handleSubmit}>
            <label>
                <span>login</span>
                <input type='text' value={login} onChange={handleChangeLogin}></input>
            </label>

            <label>
                <span>password</span>
                <input type='password' value={password} onChange={handleChangePassword}></input>
            </label>

            <button type='submit'>login</button>
        </form>
    )
};

export default LoginForm;