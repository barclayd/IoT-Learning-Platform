import React from 'react';

const emailHoverText = <p>Here you can set the subject and body of an email and select which users you want to receive an email alert when the value falls outside of the range stated in Sensor Settings.</p>;
const emailText = <p>Emails are the default way of notifying a user when the sensor readings fall outside of a minimum and maximum range. Recipients are a list of people who will be sent the email alert.</p>;

const sensorHoverText = <p>An email alert will be sent when a sensor reading falls outside of the minimum/maximum range. You can customise the email in Email Settings.</p>;
const sensorText = <p>Select a supported sensor type and a sensor component and customise the minimum and maximum ranges that constitute 'standard' reading levels. </p>;

const generalHoverText = <p>You can make further changes to a Use Case such as altering who can access a Use Case in the Admin Area. </p>;
const generalText = <p>Make changes to the Use Case by altering key details such as name, description and image.</p>;

const newUseCase = <p>You can add a New Use Case, specifying the general settings, sensor settings and use case permissions. Once created, they can be further configured in the Use Case's Setting's tab.</p>;

const noUseCases = <p>You have successfully set up your account. <br/><br/> Please contact your trainer, who will add Use Cases for you to access before you can begin to use the learning platform.</p>;

const useCaseList = <p>Here are a list of all the Use Cases in the Learning Platform. <br/><br/> From here, you can configure general settings adjust user permissions. <br/> Add a New Use Case from the 'Add a New Use Case' tab in the menu</p>;

const sensorsList = <p>From here you can view all supported sensor types and components. Edit, add and remove sensor types and components here</p>;

const usersList = <p>From here you can view all non-Community users. Edit a user's general information, change the user's role, see all of the Use Cases they have access to or delete a user.</p>;

const signIn = <p>If you are a Trainer or Apprentice, please enter your email and password to login to your account.<br/><br/>If you are logging in as a Community user, please select your community from the dropdown list and enter the generic community password. <br/><br/> Sign up for an account by clicking 'Switch to Sign-Up'</p>;


const signUp = <p>Please enter your name, email address and password to sign up for an account. <br/><br/> Once you have signed up, your Trainer can give you access to Use Cases.</p>;

const toolbarLoggedIn = <p>Along the toolbar, you can access Usecases/Documentation/About pages.<br /><br />Click on the circle personalised with your email first initial to access your User Profile and click Logout to sign out of the application.</p>;

const toolbarLoggedOut = <p>Click Login/Sign Up to access the portal to sign in to your account in the application or sign up for an account.</p>;

const liveReadingsLoading = <p>The web app is currently connecting to the Arduino to build a Real Time Graph of the latest readings. Please be patient whilst the web app retrieves the data from the Arduino.<br/><br/>If you have waited for longer than 20 seconds, please try refreshing the page</p>;

const liveReadingsLoaded = <p>The graph below displays the Live Readings gathered by the Arduino. These are updated and mapped on the graph every 2 seconds</p>;

const liveReadingsFailed = <p>The Live Readings failed. This could be for a number of reasons.<br/><br/>Please try the following: <ul><li>• Connecting/Reconnecting the Arduino</li><li>• Refreshing the page</li><li>• Contact your Trainer</li></ul></p>;

const historicReadings = <p>A week's worth of historic data that has been collected over the last 7 days is displayed below<br/><br/>Data is averaged values recorded on a given day and displayed in both Bar and Line Charts to map trends over a given week.</p>;

const information = <p>View all the key details about a Use Case</p>;
const configureArduino = <p>Learn how to configure your Arduino for this Use Case </p>;

const userProfileApprentice = <p>View your user details, account role and account history. <br/><br/> Here you can also change your user name and update your profile picture</p>;
const userProfileTrainer = <p>View your user details, account role and account history. <br/><br/> Here you can also edit your user name, change your account role and update your profile picture</p>;


export {
 emailHoverText, emailText, sensorHoverText, sensorText, generalText, generalHoverText, newUseCase, noUseCases, useCaseList, sensorsList, usersList, signIn, signUp, toolbarLoggedIn, toolbarLoggedOut,
 liveReadingsLoaded, liveReadingsLoading, liveReadingsFailed, historicReadings, configureArduino, information, userProfileApprentice, userProfileTrainer
}
