import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import FastfoodIcon from '@material-ui/icons/Fastfood';

import {auth} from '../../Firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import { selectCartHidden } from '../../Redux/cart/cart.selectors';
import { selectCurrentUser } from '../../Redux/user/user.selectors';

import './Header.styles.scss';


const Header = ({currentUser,hidden}) => (

  <div className="header" >
      <Link to = "/">
        <FastfoodIcon className="logo-container" />
      </Link>
      <div className="options">
        <Link className="option" to="/shopitem">BUY DISH</Link>
        <Link className="option" to="/">HOME</Link>
        {
          currentUser ? 
          <div className="option" onClick={ () => auth.signOut()}> SIGN OUT </div>
          : 
          <Link className="option" to="/signin"> SIGN IN </Link>
        }
        <CartIcon />
      </div>
      { hidden ? null:<CartDropDown /> }
      
  </div>

)

const mapStateToProps = state => createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);