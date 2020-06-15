# Assignment 2 / Shopping-Cart

Shopping-Cart is a online e-commerce web application that can be used to buy groceries online.
I have created Landing Page, Login, Sign Up, Search functionalities and About Us pages of the web application for this assignment.
1. Landing Page - Simple page with a slider that shown glimplse of the website abouts the products that are offered.
2. Search page - I have created search functionality using dummy data for now. If the user types fruit, mask or meat in the search bar it will render the SearchOutput component
and dislay the results for the products that have the provide the results on the basis of the given input.
3. Login Page - It asks the user to provide valid email and password to login.
4. Sign-Up page - It asks the user to provide First Name, Last Name, Valid Email and password and matches the password with confirm password.
5. About Us Page = It provided the user details about the website and email address of custome care.

* Date Created: 14 Jun 2020
* Last Modification Date: 15 Jun 2020

## Authors

* [Bharat Bhargava](bh375119@dal.ca) - (Developer)

### Prerequisites

JavaScript plug-ins should be installed and enabled in the browser in which the application is executed.

### Getting Started

1. Go to project folder and install dependencies:  
 npm install

3. Build the application for production:
 npm run build
 
3. To run the application run npm start and open (localhost:5000) in the browser to launch application.

## Installing

The application does not require any installation and is already deployed on heroku.

## Deployment

1. Pushed the application code on GitLab.
2. Created an application on Heroku.
3. Created a .gitlab-ci.yml file to create the pipleline to build and deploy the application.
4. Used Heroku app name and api key in project environment variables to connect to heroku.


## Built With

* [ReactJS](https://reactjs.org/docs/getting-started.html) - Used to develop front end web application
* [VSCode](https://code.visualstudio.com/docs) - Text editor used to develop the application and write the code.
* [ExpressJS(https://expressjs.com/en/guide/routing.html) - To set up deployment in production environment.

## Sources Used

### Home.js

Lines 48 - 65
---------------

```
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

```
The code above was created by adapting the code in [W3.CSS Slideshow](https://www.w3schools.com/w3css/w3css_slideshow.asp) as shown below: 
```
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

```

- The code in [W3.CSS Slideshow](https://www.w3schools.com/w3css/w3css_slideshow.asp) was implemented javascript by checking next and previous slides for previous and next slides.
- [W3.CSS Slideshow](https://www.w3schools.com/w3css/w3css_slideshow.asp) 's Code was used because i need to implement slideshow on my website landing page.
- [W3.CSS Slideshow](https://www.w3schools.com/w3css/w3css_slideshow.asp) 's Code was modified by completely modifying the code from javascript to reactjs and implementing additional methods to successfully implement the functionality. It helped in creating a slideshow on my landing page.


### index.js

Lines 1 - 17
---------------

```
const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/shopping-cart/build/'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/shopping-cart/build/index.html'));
})

app.listen(port, () => {
  console.log(`Server is runing on port: ${port}`);
});

```

The code above was created by adapting the code in [Dave Ceddia](https://daveceddia.com/deploy-react-express-app-heroku/) as shown below: 

```
const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

```

- The code in [Dave Ceddia](https://daveceddia.com/deploy-react-express-app-heroku/) was implemented by using node environment to build the application for deployment.
- [Dave Ceddia](https://daveceddia.com/deploy-react-express-app-heroku/)  Code was used because I needed the node environment to build my application.
- [Dave Ceddia](https://daveceddia.com/deploy-react-express-app-heroku/)  Code was modified by changing my project specifications like project name and dependencies. It helped in deploying my project on heroku.

## Design Justification

I have preferred simple design which is easily accessible the users and have used light colors.
Users can check the products price without login or sign-up just by typing the name on the search bar.
Email Validation in done in login and Sign up page to reduce any chances of spam.

## References

1. “HTML,” W3Schools Online Web Tutorials. [Online]. Available: https://www.w3schools.com/. [Accessed: 12-Jun-2020].
2. “Where Developers Learn, Share, &amp; Build Careers.” [Online]. Available: https://stackoverflow.com/. [Accessed: 11-Jun-2020].
3. “Getting Started,” React. [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: 13-Jun-2020].
4. C. Coyier, “CSS Style Guides: CSS-Tricks,” CSS, 23-Apr-2016. [Online]. Available: https://css-tricks.com/css-style-guides/. [Accessed: 09-Jun-2020].
5. “Free JavaScript training, resources and examples for the community,” JavaScript.com. [Online]. Available: https://www.javascript.com/. [Accessed: 11-Jun-2020].

## Images

All images used in search output component are downloaded from Google Photos.
fruits_1.jpg, fruits_1.jpg, fruits_1.jpg, meat_1.jpg, masks_2.jpg. [Sources] - (https://www.google.com/search?q=fruits+images&rlz=1C1CHBF_enCA899CA899&oq=fruits&aqs=chrome.0.69i59j69i57j0j46j0j69i60l3.6615j0j7&sourceid=chrome&ie=UTF-8)
(https://www.google.com/search?rlz=1C1CHBF_enCA899CA899&sxsrf=ALeKk02AvyThAS4OjsGhgNoEKc6c4kEUpQ%3A1592191216507&ei=8OjmXqzUHpGKwbkPx4yA6AM&q=mask+images&oq=masks+ima&gs_lcp=CgZwc3ktYWIQAxgAMgQIABBDMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKOgQIIxAnOgUIABCxAzoCCAA6BQgAEJECOgUIABCDAToHCAAQsQMQQzoGCAAQChBDUPCsAliBvwJg58gCaABwAHgAgAHEAYgBjwiSAQM1LjSYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab)
(https://www.google.com/search?rlz=1C1CHBF_enCA899CA899&sxsrf=ALeKk03q-9oFoOeBolWVquOO1J27JrP7zA%3A1592191259705&ei=G-nmXt_ZKvarwbkP_KacqA8&q=meat+images&oq=meat+&gs_lcp=CgZwc3ktYWIQAxgAMgQIABBDMgQIABBDMgcIABCxAxBDMgQIABBDMgUIABCxAzICCAAyAggAMgIIADIFCAAQsQMyAggAOgQIIxAnOgcIABCDARBDOgUIABCDAToICAAQsQMQkQI6BQgAEJECUIeVAljsnAJglacCaABwAHgAgAHhAYgBkQaSAQUwLjQuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab)

Images used on sider on landing page used from Big Basket website Gallery.
masks.jpg, protein.jpg, breakfast.jpg. [Source] - (https://www.bigbasket.com/media/uploads/banner_images)

The Logo on navigation bar i have created by taking reference from the wireframe i created in Assignment 1.

Note: 
- The help link on the footer is to redirect to FAQs page but the functionality is not implemented in this assignment.
- The web application has been made responsive with respect to the below devices:  
    IPhone-5/6/7/8/X, Motp G4,Galaxy S5,Pixel 2,Pixel 2XL (As defined on Google chrome browser)
