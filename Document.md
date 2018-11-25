# Hack Week Project Docoument

### Our Pizza App to bring you the pizza places closest to you

### Intro

#### Group Name: Fancy Unicorns

Group Members

- Brock Gibson
- Jordan Liebman
- Adam Oakes
- Ali Shahmoradi

Background:

We made a basic app with react, using a custom google map API backend to return info about the pizza places within a zip code. You simply type in the zip code and get a list of pizza in your area within seconds.

### The Problem

Let's face it. You want pizza. and most importantly, you want your pizza now. This app allows you to find the pizza closest to you, and give all the info of the pizza places that you'd need to get your pizza

### The Solution

We solved our problem using the javascript framework React. React allow dynamic loading of the pages only reloading when necessary.
Using that and a custom AWS google maps api call, we enter in the zip code and then fire off a request to that api. It then returns lots of information about the pizza places, and then we loading that into a readable list for the users to see which places are closest to them. It is styled with bootstrap, so that the UI is friendly for the users. It is uses react router for routing/navigating us through different pages.

### Implementation

Technologies used:

- React
- React Router
- Google Maps API
- Bootstrap
- AWS Lamba Server

How we used them:

- React was used for all of the basic functionality. We heavily relied on the componentDidMount() function to fire off requests when the componenet mounted

- React router was used for navigating between the pages and loading them. The router handled when we enter the zip code and it took us to the new page, and all the page SPA navigation.

- Google Maps API was used to retrieve all the data about the pizza places within a certain zip code area, and then return that in a nice JSON reponse to fill our react page

- Bootstrap was used for all our styling, and made for a really nice UI

- AWS Lamba server was used for hosting our rest api to hit with our requests, and to have the c# backend fire the google request and handle all the server side backend of the get request.

### Who did what?

- Brock Gibson: Most of the front end functionality (Firing off the request, filling the list, basic page layout)
- Jordan Liebman: Most of the backend (handling the request and setting up the proper json reponse)
- Adam Oakes: Navigation through the pages using react router
- Ali Shahmoradi: Boostrap Master (styling and making everything look pretty. Everyone loves a good looking and functional application)

### Tips, Tricks

For deployment: Firebase is the way to go to get a simple app up and running super quickly, and most importantly, secure and free.

React is here to stay, so I'd learn it. It is one of the biggest repos and most used modern frameworks, but also has one of the smallest ratios of issues, which means they are resolved quickly, and is constantly being updated and upkept well.

Comparing it to angular, it has 350ish open issue requests, compared to angular's 2,200+.

### The Future:

Something that'd be very challenging is to implement a actually map with pins of the pizza places on them in your area, that way you could visually see the location, as well as a list.

URL: https://hackillinois2018-65d9f.firebaseapp.com/
