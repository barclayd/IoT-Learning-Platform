## IoT - Team 1
###### 14th December 2018

View this project live: https://team1-iot.firebaseapp.com/

We are a 4 person team that is tasked to create a web-app that teaches apprentices about creating IoT sensors and output the sensor data in the web-app.
## Motivation
A modularised Learning Platform to assist Trainers, Apprentices and Communities in developing sensor based, Internet of Things Use Cases.

## Code style
  [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Screenshots and GIFs

**GIF of adding Use Case**

**GIF of updating Use Case**

**GIF of updating adding user permissions in Admin Area**

**GIF of success notification**

**GIF of adding feedback**

## Tech/framework used
Ex. -

<b>Built with</b>
<![endif]-->

* Hardware - Arduino UNO board with provided sensors (e.g. thermometer)
* Database - Firebase: https://team1-iot.firebaseio.com/
* IoT framework - johnny-five
* Backend - Node.js server
* Frontend - React.js client
* State Management – Redux, Redux Saga, Redux Thunk
* Routing - react-router
* Charting libraries - EON.js, Chart.js
* HTTP Client - axios
* Authentication - Firebase Auth API
* Hosting: Firebase
* Real-time data transfer - websockets
* Email framework – nodemailer
* Styling: Ant.d, node-sass, normalize.css
* Development: Redux Chrome Tools, Nodemon
* Accessibility: jsx-a11y
* Testing: Enzyme

## Features

- [x] Authentication
- [x] Customised User Experience
- [x] User Profiles
- [x] Admin Area
- [x] Use Cases
- [x] Email notifications
- [x] Full range of CRUD operations
- [x] Tips and tricks
- [x] Feedback system
- [x] Community Forum
- [x] Documentation
- [x] Form validation
- [x] Highly dynamic and customised design
- [x] Notification system
- [x] Form validation

## Design and Usability Decisions
Clean, high contrast was implemented to ensure that it provided an optimum experience for users who are visually impaired

## Supported Accessibility
* Autism adapted design
* Every care has been taken to implement as many feature as possible to ensure the most optimum experience for visually impaired users
* Testing with Chrome Vox
* Implementation of React a11y library, use of aria-label and React features for enhanced screen reading compatability

## Styling Decisions

Styling has been primarily achieved through use of an external library – Ant.D[link to Ant D]. This has been further customised with use of inline, dynamic css styling and css/scss.module files which have allowed us to style components and functionality further to our own choosing. Alternative options styling that we could have chosen include a variety of other frameworks, such as React-Material-UI or Boostrap.

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run server`

Runs the server in the development mode using Nodemon.<br>
This currently is set-up to post data to Firebase and live data to client via websockets.

Alternatively, you can run 'node server/index' from terminal.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- - - -

### `scripts/StandardFirmata`

**Please follow these steps when setting up the Arduino for the first time**

After correctly setting up your Arduino Uno as per the relevant Docs and having connected it to your computer via a USB cable, please ensure that you have downlaoded and installed the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
On Arduino IDE, go to Tools > Port and ensure that the correct board (Arduino Uno) is connected to the correct port - tty.usbmodem… for Mac, cu.usbmodem…for Windows.

1. On the IDE, copy the StandardFirmata.cpp script from the project directory 'scripts folder' and run in the IDE
2. lternatively, on the IDE. Open File > Example > Firmata > StandardFirmata
3. Click the upload (right arrow) button and wait for a message from the IDE displaying "Done uploading"
4. Close the IDE


- - - -


## Setting up Firebase

1. Create an account for Firebase
2. Import firebase.json from Server/data/Firebase/Firebase.json
3. Edit baseURL from server/axios-instance to the url of the database you created in firebase.

## Installation of Client
Provide step by step series of examples and explanations about how to get a development env running.

```sh
$ npm install
$ npm start
```

## How to use the Web App

As a Trainer

1. Login using these credentials (email: [t@t.com](mailto:t@t.com), pass: testing).
2. Create new use case at the bottom of the main menu
3. Edit use cases by clicking on a use case and go to the settings section
4. Edit user details in Admin Area
5. Add new feedback for a Use Case
6. Change the list of support sensors in the Sensors tab in Admin Area
7. Update details, change role and delete users from Users tab in Admin Area

The only way to create a new trainer account is through Admin Area page accessed by the [t@t.com](mailto:t@t.com) account. Find the user you want to change its role to a trainer in the Users section from the right-side menu. Then change the role of that user from Apprentice to a Trainer. This user now has all the privileges [t@t.com](mailto:t@t.com) has.

Go to [https://console.firebase.google.com](https://console.firebase.google.com)

<Login in using these credentials (username: [nsa.team1.iot@gmail.com](mailto:nsa.team1.iot@gmail.com), pass: 123123q1)

As an Apprentice

1. Login/sign up to apprentice user account
2. Can only look at use cases assigned by trainer
3. Look at sensor readings in the use case page
4. Can change email and sensor settings

As a Community

 - Login/sign up to community user account – select community mode and select Newport from the dropdown list. Password: newport16
 - Can only look at the use cases associated with the community
 - Look at sensor readings in the use case page
 - Can change email and sensor settings
 - Post messages on the community forum page

## Installed Packages

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

 - [Socket.io-client](https://electron.atom.io)
 - [Redux](https://electron.atom.io)
 - [React-Redux](https://electron.atom.io)
 - [React-Router-Dom](https://electron.atom.io)
 - [dateFormat](https://electron.atom.io)
 - [bootstrap](https://electron.atom.io)
 - [PropTypes](https://electron.atom.io)
 - [Axios](https://electron.atom.io)
 - [Enzyme](https://electron.atom.io)
 - [enzyme-adapter-react-16](https://electron.atom.io)

## Tests and Test Strategy
Describe and show how to run the tests with code examples.
Jest vs Mocha vs Enzyme
End-to-End Tests
Performance Tests
Snapshot Tests
Component Tests
Unit Tests

## Organisation of Code
Write away here!

## Plans for expanding the project

 - Enhanced Security
 - Enhanced Notifcation System
 - Enhanced feedback system



## References
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project.

#### Anything else that seems useful
