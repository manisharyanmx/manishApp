import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import {Link} from 'react-router-dom';

import './Header.styles.scss';


const Header = () => (

  <div className="header" >
      <Link to = "/">
        <FastfoodIcon className="logo-container" />
      </Link>
      <div className="options">
        <Link className="option" to="/">BUY RECIPE</Link>
        <Link className="option" to="/">SIGN OUT</Link>
      </div>
  </div>

)

export default Header;