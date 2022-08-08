import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

import './navbar.css';
import app from '../../firebase/firebase';

export const Navbar = ({ online, setOnline }) => {

  const navigate = useNavigate();

  const auth = getAuth(app);

  const handleLogout = e => {
    signOut(auth).then(() => {
      // Sign-out successful
      setOnline(false);
    }).catch((error) => {
      // An error happened.
    });
  }


  const notOnline = () => {

    if (online == true) {
      navigate('/login');
    }
  }

  return (
    <div>
      <nav className='container-navbar'>
        <Link to='/'>Fun-<span>Games</span></Link>
        <Link to='/'>Home</Link>
        <Link to='/'>Games</Link>
        <Link to='/'>Ranking</Link>
        <Link to='/'>Shop</Link>


        {online ? <div className='container-login'>
          <Link to={'/user'}>User</Link>
          <Link to={'/login'} onClick={handleLogout}>Logout</Link>
        </div> :
          <div className='container-login'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Sign Up</Link>
          </div>}



      </nav>
    </div>
  )
}
