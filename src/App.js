import React  from 'react';

import { Switch, Route } from 'react-router-dom';
import SignInSignUp from '../src/components/SignInAndSignUp/SignInandSignUp';
import {auth, createUserProfileDocument} from './Firebase/firebase.utils';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id : snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
        
      }
      else {
        this.setState({currentUser:userAuth});
      }
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
