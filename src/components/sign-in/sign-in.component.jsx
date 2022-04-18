import React from 'react';
import CustomButton from '../custom-button/custom.button.component';
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''

        }

    }

    // handleSubmit
    handleSubmit = e => {
        e.preventDefault(); // full controll the submit action
        this.setState({email:'', password: ''});
    }


    handleChange = e => {
        const { value, name } = e.target;
        // dinamically set user input value of name and password
        this.setState({[name]: value});
    };

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
              />
                
                <CustomButton type='submit'> SIGN IN</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignIn