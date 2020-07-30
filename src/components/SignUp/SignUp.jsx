import React from 'react'; 

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import {auth, createUserProfileDocument} from '../../Firebase/firebase.utils';

import './SignUp.styles.scss';

class SignUp extends React.Component {

    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert ("passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            alert('Successfully Signed Up!! Relish Eating')

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })

        } catch (error) {
            console.log('error', error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(

            <div className ="signup"> 
            
                <h2 className="title"> I do not have an account </h2>
                <span>SignUp with your email and password</span>           
                <form className = "sign-up-form" onSubmit={this.handleSubmit}>

                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}  
                        onChange = {this.handleChange}
                        label="DisplayName"
                        required                  
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}  
                        onChange = {this.handleChange}
                        label="Email"
                        required                  
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}  
                        onChange = {this.handleChange}
                        label="Password"
                        required                  
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}  
                        onChange = {this.handleChange}
                        label="Confirm Password"
                        required                  
                    />
                    <Button type="submit"> SIGN UP </Button>
                </form>
            </div>

        )
    }

}


export default SignUp;