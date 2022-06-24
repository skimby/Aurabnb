import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';


const SignupFormPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {

    }, [firstName, lastName, password, passwordConfirm])

    if (sessionUser) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === passwordConfirm) {
            setErrors([]);
            return dispatch(sessionActions.signup({ firstName, lastName, email, password }))
                //this is not catching and stopping errors.. why?
                .catch(async (res) => {
                    const data = await res.json();
                    console.log(data)
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <>
            <h1>Welcome to Airbnb</h1>
            <div className="errors">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </div>

            <form onSubmit={handleSubmit} >
                <input
                    type='text'
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required />

                <input
                    type='text'
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required />

                <input
                    type='text'
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />


                <input
                    type='text'
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />

                <input
                    type='text'
                    placeholder="confirm password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required />

                <button type="submit">Continue</button>
            </form >
        </>
    )
}

export default SignupFormPage;
