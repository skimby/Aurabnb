import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './LoginForm.css';
import * as sessionActions from '../../store/session';

const LoginForm = () => {
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ email, password }))
            .catch(async (res) => {
                // console.log('catching error')
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <>
            <div className="login-form-modal">
                <div className="form-header">
                    <h2>Welcome Back</h2>
                </div>
                <form onSubmit={handleSubmit} >

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
                            type='password'
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </label>
                    <div className="errors">
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </div>
                    <button type="submit" id='block-button'>Continue</button>
                </form >
            </div>
        </>
    )
}

export default LoginForm;
