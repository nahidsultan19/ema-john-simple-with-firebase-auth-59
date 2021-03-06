import { FirebaseError } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    // const [signInWithGoogle] = useSignInWithGoogle(auth);
    const googleProvider = new GoogleAuthProvider(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }


    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    const handleGoogleSignIn = () => {
        console.log('Hello Google..')
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error)
            })



        // signInWithPopup(googleProvider);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form action="" onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' placeholder='Your Email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' placeholder='Your Password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {loading && <p>Loading</p>}
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link></p>
                <button onClick={handleGoogleSignIn} className='google-login'>Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;