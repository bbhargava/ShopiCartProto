import React, { Component } from 'react';
import './Login.css';
import Footer from '../Footer';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: ''
        };
    }
    handleChange = (event) => {
        this.setState({ error: "" });
        var key = event.target.name;
        var value = event.target.value;
        // eslint-disable-next-line
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        if (expression.test(value)) {
            this.setState({ [key]: value });
        } else {
            this.setState({ error: "Please enter valid email address" });
        }

    }
    render() {

        return (

            <div className='Login'>
                <div>
                    <form class="form">
                        <h3>Login</h3>
                        <div >
                            <label>Email address</label>
                            <br></br>
                            <input type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                            <span className="err-msg">{this.state.error}</span>
                        </div>

                        <div >
                            <label>Password</label>
                            <br></br>
                            <input type="password" placeholder="Enter password" />
                        </div>
                        <br></br>
                        <button type="submit" >Submit</button>
                        <p>
                            <a href="/#">Forgot password?</a>
                        </p>
                    </form>
                </div>
                <Footer />
            </div>



        )

    }
}