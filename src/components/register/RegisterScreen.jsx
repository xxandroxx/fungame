import React from 'react'
import { RegisterForm } from './RegisterForm'
import './registerscreen.css';

export const RegisterScreen = () => {

  return (
    <div className='container-registerscreen'>
        <h2>Sign Up</h2>
        <RegisterForm />
    </div>
  )
}
