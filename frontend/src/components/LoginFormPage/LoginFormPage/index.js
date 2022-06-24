import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../store/session";
import { Redirect } from "react-router-dom";
import './LoginForm.css';

const LoginFormPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    if (sessionUser) return (
        <Redirect to='/' />
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password }
        dispatch(setUser(user));

    }

    return (
        <>
            <h1>Welcome to Airbnb</h1>
            <form onSubmit={handleSubmit} >
                <label>

                    <input
                        type='text'
                        placeholder="country/region"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </label>

                <label>

                    <input
                        type='text'
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </label>

                <button type="submit">Continue</button>
            </form >
        </>
    )
}

export default LoginFormPage;
