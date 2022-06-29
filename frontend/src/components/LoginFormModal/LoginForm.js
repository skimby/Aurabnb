import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';
import * as sessionActions from '../../store/session';

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    // if (sessionUser) return (
    //     <Redirect to='/' />
    // )

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        //*** i think the problem is here: never throws an error
        return dispatch(sessionActions.login({ email, password }))
            .catch(async (res) => {
                // console.log('catching error')
                const data = await res.json();
                // console.log('hello world');
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <>
            <h1>Welcome to Airbnb</h1>
            <form onSubmit={handleSubmit} >
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>

                    <input
                        type='text'
                        placeholder="email"
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

export default LoginForm;
