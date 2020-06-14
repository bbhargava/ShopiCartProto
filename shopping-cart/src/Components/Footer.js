import React,{} from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
    return (
        <div>
            <footer>
                <a class = "footer-content" href="/AboutUs">About Us</a>
                <a class = "footer-content" href="/#">Help</a>
            </footer>

        </div>
    );
}

export default withRouter(Footer);