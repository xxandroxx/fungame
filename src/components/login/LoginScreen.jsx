import React from 'react'
import { LoginForm } from './LoginForm'

import './loginscreen.css';

export const LoginScreen = ({setOnline}) => {
  return (
    <div className='container-loginscreen'>

      <h2>Login</h2>
        <LoginForm setOnline={setOnline} />
    </div>
  )
}
