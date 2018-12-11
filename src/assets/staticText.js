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


const signUp = <p>Please enter your name, email address and password to sign up for an account. <br/><br/> Once you have signed up, your Trainer can give you access to Use Cases</p>;

const toolbarLoggedIn = <p>Along the toolbar, you can access Usecases/Documentation/About pages <br /><br />Click on the circle personalised with your email first initial to access your User Profile and click Logout to sign out of the application </p>;

const toolbarLoggedOut = <p>Click Login/Sign Up to access the portal to sign in to your account in the application or sign up for an account</p>;

export {
 emailHoverText, emailText, sensorHoverText, sensorText, generalText, generalHoverText, newUseCase, noUseCases, useCaseList, sensorsList, usersList, signIn, signUp, toolbarLoggedIn, toolbarLoggedOut
}
