import React from 'react';

const emailHoverText = <p>Here you can set the subject and body of an email and select which users you want to receive an email alert when the value falls outside of the range stated in Sensor Settings.</p>;
const emailText = <p>Emails are the default way of notifying a user when the sensor readings fall outside of a minimum and maximum range. Recipients are a list of people who will be sent the email alert.</p>;

const sensorHoverText = <p>An email alert will be sent when a sensor reading falls outside of the minimum/maximum range. You can customise the email in Email Settings.</p>;
const sensorText = <p>Select a supported sensor type and a sensor component and customise the minimum and maximum ranges that constitute 'standard' reading levels. </p>;

const generalHoverText = <p>You can make further changes to a Use Case such as altering who can access a Use Case in the Admin Area. </p>;
const generalText = <p>Make changes to the Use Case by altering key details such as name, description and image.</p>;

const newUseCase = <p>You can add a New Use Case, specifying the general settings, sensor settings and use case permissions. Once created, they can be further configured in the Use Case's Setting's tab.</p>;

export {
 emailHoverText, emailText, sensorHoverText, sensorText, generalText, generalHoverText, newUseCase
}
