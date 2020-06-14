import React, { Component } from 'react';
import './Home.css';
import Mask from './../Gallery/masks.jpg'
import protein from './../Gallery/protein.jpg'
import breakfast from './../Gallery/breakfast.jpg'
import Footer from '../Footer';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            slideIndex: 1,
            search: ''

        });
        this.showSlides = this.showSlides.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(event) {
        this.props.history.push({
            pathname: '/SearchOutput',
            search: '?query= '+event.target[0].value,
            params : event.target[0].value
        });
    }


    // Next/previous controls
    plusSlides(n) {
        let newValue = this.state.slideIndex + n;
        this.setState({ slideIndex: newValue }, () => {
            this.showSlides(newValue);
        });
    }

    // Thumbnail image controls
    currentSlide(n) {
        this.setState({ slideIndex: n }, () => {
            this.showSlides(n);
        })
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { this.setState({ slideIndex: 1 }); }
        if (n < 1) {
            this.setState({ slideIndex: slides.length });
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (slides[this.state.slideIndex - 1] !== undefined) {
            slides[this.state.slideIndex - 1].style.display = "block";
        }
        if (dots[this.state.slideIndex - 1] !== undefined) {
            dots[this.state.slideIndex - 1].className += " active";
        }
    }

    render() {
        return (
            <div>
                <div className="search-bar-container">
                    <form onSubmit={this.updateSearch.bind(this)}>
                        <input type="text" className="search-bar" name="search" placeholder="Search.."/>
                    </form>
                </div>

                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img alt = "mask" src={Mask} style={{ width: "100%" }} />
                        <div className="text">Caption Text</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img alt = "protein" src={protein} style={{ width: "100%" }} />
                        <div className="text">Caption Two</div>
                    </div>
                    <div className="mySlides fade">
                        <div className="numbertext">3 / 3</div>
                        <img alt = "breakfast" src={breakfast} style={{ width: "100%" }} />
                        <div class="text">Caption Three</div>
                    </div>
                    <a href = "/#" className="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</a>
                    <a href = "/#" className="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</a>
                </div>
               
                <div style={{ textAlign: "center" }}>
                    <span className="dot" onClick={this.currentSlide.bind(this, 1)}></span>
                    <span className="dot" onClick={this.currentSlide.bind(this, 2)}></span>
                    <span className="dot" onClick={this.currentSlide.bind(this, 3)}></span>
                </div>
                {this.showSlides(1)}
                <Footer />
            </div>
        )

    }
}