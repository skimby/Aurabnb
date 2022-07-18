import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';


const SignupForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password === passwordConfirm) {
            setErrors([]);
            await dispatch(sessionActions.signup({ firstName, lastName, email, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    console.log(data)
                    console.log(data.errors)

                    if (data && data.errors) {
                        setErrors(data.errors);
                    }
                });
        } else {
            return setErrors(['Confirm Password field must be the same as the Password field']);

        }
    };

    return (
        <>
            <div className='signup-form-modal'>
                <div className="form-header">
                    <h2>Welcome to Airbnb</h2>
                </div>


                <div className='form-div'>
                    <form onSubmit={handleSubmit} >
                        <input
                            type='text'
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required />

                        <input
                            type='text'
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required />

                        <input
                            type='text'
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />


                        <input
                            type='text'
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />

                        <input
                            type='text'
                            placeholder="Confirm Password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required />
                        <div className="errors">
                            {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
                        </div>

                        <button id='block-button' type="submit">Continue</button>
                    </form >
                </div>
            </div>
        </>
    )
}

export default SignupForm;
