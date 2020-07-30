import React  from 'react';

import { Switch, Route } from 'react-router-dom';
import SignInSignUp from '../src/components/SignInAndSignUp/SignInandSignUp';
import {auth} from './Firebase/firebase.utils';
import  Header from './components/Header/Header';
import HomePage from './HomePage/HomePage';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    } 
  }

  unsubscribeFromAuth = null;

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){

    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/signin' component={SignInSignUp} />
        </Switch>
        
      </div>
    );

  }
  
}

export default App;
