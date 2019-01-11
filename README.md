## IoT - Team 1
###### 10th January 2019

View this project live: https://team1-iot.firebaseapp.com/

## Motivation

The aim of the project, which will help Data Work Wales in achieving its objectives, is to build a modularised learning platform in the form of a web application to assist Trainers, Apprentices and Communities in developing sensor based, Internet of Things Use Cases – all managed through a centralised learning platform. Peter Trott, the Managing Director, stated three example Use Cases; Monitoring of Fridge Temperatures in a hospital ward, assisting people with autism to detect if they slip under the water when in the bath and thirdly, monitoring heavy metal pollution for contamination in rivers.

The aim of the project is to build a generalised learning platform that involves the use of an Arduino to feed data using sensors with live and historic data graphs with the ability to produce a notification based on given criteria (email/SMS).

## Code style
  [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
    [![js-standard-style](https://img.shields.io/badge/deployed-live-blue.svg)](https://team1-iot.firebaseapp.com/)
    [![js-standard-style](https://img.shields.io/badge/deployed%20version-1.0.0-green.svg)](https://team1-iot.firebaseapp.com/)

## Demos and Screenshots

#### Trainer View: Adding a New Use Case
![Add a New Use Case](https://user-images.githubusercontent.com/39765499/50987356-58c58100-1501-11e9-80a2-5997eaad5117.gif)

#### Updating Settings of a Use Case
![Update Settings](https://user-images.githubusercontent.com/39765499/50998798-79e99a00-1520-11e9-9c74-2421f29de635.gif)

#### Trainer View: Admin Area - Adding New Users to a Use Case
![Adding New Users to a Use Case](https://user-images.githubusercontent.com/39765499/50998871-b1f0dd00-1520-11e9-902c-e4a59f1114c0.gif)

#### Deleting a Use Case
![Deleting a Use Case](https://user-images.githubusercontent.com/39765499/50999070-40655e80-1521-11e9-8f8e-01a76e68c225.gif)

#### Trainer View: Writing Feedback for a Use Case
![Writing Feedback for a Use Case](https://user-images.githubusercontent.com/39765499/50999185-828ea000-1521-11e9-916f-f4ef0402e9cd.gif)

#### Apprentice View: User Profile
![Apprentice View - User Profile](https://user-images.githubusercontent.com/39765499/50999560-5aec0780-1522-11e9-9062-abcae34b67c4.gif)

#### Community View: Community Forum Board and Tooltips
![Community Forum Board and Tooltips](https://user-images.githubusercontent.com/39765499/50999801-22006280-1523-11e9-8821-ba5c1b40b582.gif)

##### Dashboard
<img width="1552" alt="screenshot 2019-01-10 at 16 13 22" src="https://user-images.githubusercontent.com/39765499/50981383-c61de580-14f2-11e9-9da8-cf9d6bb4f344.png">

##### Use Case - Configure Your Adrudino
<img width="1552" alt="screenshot 2019-01-10 at 16 14 23" src="https://user-images.githubusercontent.com/39765499/50981398-d3d36b00-14f2-11e9-81f9-4e24d2b17a5d.png">

##### Use Case - Settings
<img width="1552" alt="screenshot 2019-01-10 at 16 14 47" src="https://user-images.githubusercontent.com/39765499/50981457-ee0d4900-14f2-11e9-9e7b-41c07a70534a.png">

##### Admin Area
<img width="1552" alt="screenshot 2019-01-10 at 16 15 08" src="https://user-images.githubusercontent.com/39765499/50981473-f1a0d000-14f2-11e9-9b6d-fec093000fa9.png">

##### Add New Use Case
<img width="1552" alt="screenshot 2019-01-10 at 16 16 13" src="https://user-images.githubusercontent.com/39765499/50981525-1301bc00-14f3-11e9-8f71-285791eef939.png">

## System Architecture

##### System Architecture (High-Level)
![systemarc](https://user-images.githubusercontent.com/39765499/51000636-9cca7d00-1525-11e9-92db-f7676e76b44f.jpg)

##### System Architecture including Arduino
<img width="684" alt="screenshot 2019-01-10 at 22 17 17" src="https://user-images.githubusercontent.com/39765499/51000635-9c31e680-1525-11e9-81e5-7bd628678452.png">


## Tech/framework used

<b>Built with</b>

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
- [x] Notification system generated when sensors values fall above/below range
- [x] Form validation

## Design and Usability Decisions

Clean, high contrast was implemented to ensure that it provided an optimum experience for users who are visually impaired

## Supported Accessibility
* Autism adapted design
* Every care has been taken to implement as many feature as possible to ensure the most optimum experience for visually impaired users
* Testing with Chrome Vox
* Implementation of React a11y library, use of aria-label and React features for enhanced screen reading compatability

## Styling Decisions

Styling has been primarily achieved through use of an external library – [Ant Design](https://ant.design/). This has been further customised with use of inline, dynamic css styling and css/scss.module files which have allowed us to style components and functionality further to our own choosing. Alternative options styling that we could have chosen include a variety of other frameworks, such as React-Material-UI or Boostrap.

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

Alternatively, you can run
```
$ npm test -- --coverage
```

### `npm run server`

Runs the server in the development mode using Nodemon.<br>
This currently is set-up to post data to Firebase and live data to client via websockets.

Alternatively, you can run 'node server/index' from terminal.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance, ready for deployment to Firebase
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

#### Making Changes to the existing Firebase

Go to [https://console.firebase.google.com](https://console.firebase.google.com)

Login in using the following credentials:
* username: [nsa.team1.iot@gmail.com](mailto:nsa.team1.iot@gmail.com)
* password: 123123q1

## Installation of Client
Provide step by step series of examples and explanations about how to get a development env running.

```sh
$ npm install
$ npm start
```

## How to use the Web App

As a Trainer

1. Login using these credentials:
	- username: t@t.com
	- password: testing
2. Create new use case at the bottom of the main menu
3. Edit use cases by clicking on a use case and go to the settings section
4. Edit user details in Admin Area
5. Add new feedback for a Use Case
6. Change the list of support sensors in the Sensors tab in Admin Area
7. Update details, change role and delete users from Users tab in Admin Area

The only way to create a new trainer account is through Admin Area page accessed by the [t@t.com](mailto:t@t.com) account. Find the user you want to change its role to a trainer in the Users section from the right-side menu. Then change the role of that user from Apprentice to a Trainer. This user now has all the privileges [t@t.com](mailto:t@t.com) has.

As an Apprentice

1. Login/sign up to apprentice user account
	- Example Apprentice Account
		- username: liam@m.com
		- password: testing
2. Can only look at use cases assigned by trainer
3. Look at sensor readings in the use case page
4. Can change email and sensor settings

As a Community

 - Login/sign up to community user account – select community mode and select Newport from the dropdown list
 - Password for Newport account: newport16
 - Can only look at the use cases associated with the community
 - Look at sensor readings in the use case page
 - Can change email and sensor settings
 - Post messages on the community forum page

## Installed Packages

 - [Antd](https://electron.atom.io)
 - [Axios](https://github.com/axios/axios)
 - [bootstrap](https://electron.atom.io)
 - [dateFormat](https://github.com/felixge/node-dateformat)
  - [EON](https://github.com/pubnub/eon)
 - [Nodemailer](https://electron.atom.io)
  - [Nodemon](https://github.com/remy/nodemon)
  - [PropTypes](https://electron.atom.io)
  - [React-App-Rewired](https://github.com/timarney/react-app-rewired)
 - [React-Redux](https://github.com/reduxjs/react-redux/)
 - [React-Router-Dom](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md)
 - [React a11y](https://github.com/reactjs/react-a11y)
  - [React Chart JS 2](https://github.com/jerairrest/react-chartjs-2)
  - [ReduxSaga](https://github.com/redux-saga/redux-saga)
  - [Redux Thunk](https://github.com/reduxjs/redux-thunk)
 - [Redux](https://redux.js.org/)
 - [Socket.io](https://socket.io/)
 - [Socket.io-client](https://socket.io/)


## Tests and Test Strategy

Jest and Enzyme were implemented to test the functionality of components through component testing and snapshots. Jest was also used to test the implementation of Redux.

## Organisation of Code

**React frontend**

React frontend was structured using best practise methods. Components hold all stateless, functional components used in the project whereas Containers hold all stateful, class based components. Routers holds all routing for the application. Store hold all actions, reducers and sagas used within the implementation of advanced Redux in the project.

**Node.js backend**

Node.js app was structured with a models folder to hold all the data-related logic that used within the application - including the retrieval of data from Arudino, sending off data to React frontend using websockets and sending sensor data to Firebase.


## Plans for expanding the project

 - Enhanced Security
 - Notifcation system
 - Improved feedback system
 - Make design responsive for mobile and tablet devices
 - Setting up of a CI-CD pipeline for easier depolyments
