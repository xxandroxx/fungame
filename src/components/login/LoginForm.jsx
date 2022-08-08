import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './loginForm.css';
import app from '../../firebase/firebase';

export const LoginForm = ({setOnline}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const auth = getAuth(app);

    const handleSubmit = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setOnline(true);
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                alert('Error al iniciar sesión');
                setEmail('');
                setPassword('');
            });
    }






    return (
        <div className='container-login-form'>
            <form onSubmit={handleSubmit} className='content-login-form'>
                <div className='content-login-input'>
                    <label htmlFor="userName">Username:</label>
                    <input type="text" id='userName' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='content-login-input'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='btn-login-form'>
                    <input type="submit" value={'Login'} />
                </div>
            </form>

            <div className='login-form-footer'>
                <p>Forgot your <span>username</span> or <span>password?</span></p>
                <p>Don't have an account? <Link to={'/register'}>Register here!</Link></p>
            </div>
        </div>
    )
}
