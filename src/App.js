import React  from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SignInSignUp from '../src/components/SignInAndSignUp/SignInandSignUp';
import {auth, createUserProfileDocument} from './Firebase/firebase.utils';
import  Header from './components/Header/Header';
import HomePage from './HomePage/HomePage';
import ShopPage from './ShopPage/ShopPage';
import Checkout from './Checkout/Checkout';
import { setCurrentUser } from './Redux/user/user.actions';
import './App.css';
import { selectCurrentUser } from './Redux/user/user.selectors';

class App extends React.Component {
  
  
  unsubscribeFromAuth = null;

  componentDidMount () {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
          });
          //console.log(this.state);
        });
        
      }
        setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    console.log('my :' ,this.props.currentUser);
    return (
      <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shopitem' component={ShopPage} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/signin' 
              render = {( () => this.props.currentUser ? (<Redirect to ='/' />) : (<SignInSignUp />)
              )} />
        </Switch>
        
      </div>
    );

  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
