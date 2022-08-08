import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../login/LoginScreen';
import { Home } from '../home/Home';
import { Navbar } from '../navbar/Navbar';
import { RegisterScreen } from '../register/RegisterScreen';
import { NotFound } from '../notfound/NotFound';

export const RoutesApp = ({online, setOnline}) => {


    return (
        <div>
            <Navbar online={online} setOnline={setOnline} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginScreen setOnline={setOnline} />} />
                <Route path='/register' element={<RegisterScreen />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}
