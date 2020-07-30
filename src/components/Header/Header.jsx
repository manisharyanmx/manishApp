import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import {Link} from 'react-router-dom';
import {auth} from '../../Firebase/firebase.utils';
import './Header.styles.scss';


const Header = ({currentUser}) => (

  <div className="header" >
      <Link to = "/">
        <FastfoodIcon className="logo-container" />
      </Link>
      <div className="options">
        <Link className="option" to="/">BUY RECIPE</Link>
        <Link className="option" to="/">CONTACT</Link>
        {
          currentUser ? 
          <div className="option" onClick={ () => auth.signOut()}> SIGN OUT </div>
          : 
          <Link className="option" to="/signin"> SIGN IN </Link>
        }
      </div>
  </div>

)

export default Header;