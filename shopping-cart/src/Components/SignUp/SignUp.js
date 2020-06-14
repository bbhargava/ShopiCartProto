import React, { Component } from 'react';
import './SignUp.css';
import Footer from '../Footer';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorEmail: '',
            confirmPassword:'',
            errorPasswordMatch:''
        };
    }
    handleChange = (event) => {
        this.setState({ errorEmail: "" });
        this.setState({ errorPasswordMatch: "" });
        var key = event.target.name;
        var value = event.target.value;
        debugger;
        if (key === 'email') {
            this.setState({ [key]: value });
            // eslint-disable-next-line
            var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            if (expression.test(value)) {
                this.setState({ [key]: value });
            } else {
                this.setState({ errorEmail: "Please enter valid email address" });
            }
        }
        else if (key === "password") {
                this.setState({ [key]: value });
            }
            else if (key === "confirmPassword") {
                // this.setState({ [key]: value });
                if(this.state.password !== value){
                    this.setState({ errorPasswordMatch: "Password does not match" });
                }
                else{
                    this.setState({ [key]: value });
                }
                
            }


    }
    render() {

        return (

            <div className='SignUp'>
                <div>
                    <form class="SignUp-form">
                        <h3>SignUp</h3>
                        <div className='display'>
                            <label className='display-align'>First Name</label>
                            <input className='display-align' type="userField" name="First Name" placeholder="Enter First Name" />
                        </div>

                        <div className='display'>
                            <label className='display-align'>Last Name</label>
                            <input className='display-align' type="userField" name="Last Name" placeholder="Enter Last Name" />
                        </div>

                        <div className='display'>
                            <label className='display-align'>Email address</label>
                            <input className='display-align' type="userField" name="email" placeholder="Enter email" onChange={this.handleChange} />
                        </div>
                        <span className="err-msg">{this.state.errorEmail}</span>
                        <div className='display'>
                            <label className='display-align'>Password</label>
                            <input className='display-align' type="password" name = 'password' placeholder="Enter password" onChange={this.handleChange} />  
                        </div>
                        <div className='display'>
                            <label className='display-align'>Confirm Password</label>
                            <input className='display-align' type="password" name = 'confirmPassword' placeholder="Enter password" onChange={this.handleChange} />   
                        </div>
                        <span className="err-msg">{this.state.errorPasswordMatch}</span>
                        <br></br>
                        <button type="submit" >Submit</button>

                    </form>
                </div>
                <Footer/>
            </div>



        )

    }
}