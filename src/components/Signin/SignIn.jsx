import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import {signInWithGoogle, auth} from '../../Firebase/firebase.utils';

class SignIn extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            email:'',
            password:'',
        }

    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''})
            console.log(this.props);
        } catch (error) {
            console.log('error', error)
        }
    }
    
    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]:value})
    } 
    render(){

        return(
            <div className='sign-in' >
                <h2> I already have an account </h2>
                <span> Sign In with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label = "email" required handleChange={this.handleChange}/>
                    <FormInput name="password" type="password" value={this.state.password} label = "password" required  handleChange={this.handleChange}/>
                    <div className = "buttons">
                        <Button type ="submit"> Sign In </Button>
                        <Button onClick = {signInWithGoogle} isGoogleSignIn > 
                        {' '}
                        Sign In With google {' '} 
                        </Button>
                    </div>
                </form>
            </div>
        );
    }


}
export default SignIn;
