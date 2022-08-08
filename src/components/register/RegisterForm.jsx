import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase';
import './registerform.css';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const navigate = useNavigate();

    const auth = getAuth(app);


    const handleSubmit = e => {
        e.preventDefault();

        if (password != reenterPassword) {
            alert('Contraseñas no son iguales');
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate('/login');
                    alert('Cuenta creada satisfactoriamente');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;
                    alert(errorCode);

                    setPassword('');
                    setReenterPassword('');
                    setBirthday('');
                    // ..
                });
        }


    }
    return (
        <div className='container-register-form'>
            <form onSubmit={handleSubmit} className='content-register-form'>
                <div className='content-register-input'>
                    <label htmlFor="userName">Username:</label>
                    <input type="text" id='userName' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='content-register-input'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='content-register-input'>
                    <label htmlFor="re-password">Re-enter Password:</label>
                    <input type="password" id='re-password' value={reenterPassword} onChange={(e) => setReenterPassword(e.target.value)} />
                </div>

                <div className='content-register-input'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='content-register-input'>
                    <label htmlFor="birthday">Date of Birth:</label>
                    <input type="date" id='birthday' value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                </div>

                <div className='btn-register-form'>
                    <input type="submit" value={'register'} />
                </div>
            </form>


        </div>
    )
}
