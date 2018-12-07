const nodemailer = require('nodemailer');
const axios = require('../axios-instance');



// Configure the email
const transporter = nodemailer.createTransport(
    
    {
    service: 'gmail',
    auth: {
           user: "nsa.team1.iot@gmail.com",
           pass: '123123q1'
    }
});

let mailOptions;
let emailSenders;
let emailSubject;
let emailBody;

// Compose the new email
const composeEmail = (useCaseID) => {
    axios.get('/useCases.json')
        .then(response => {
            // console.log(response.data[0].email.senders);
            emailSenders = response.data[useCaseID].email.senders;
            emailSubject = response.data[useCaseID].email.subject;
            emailBody = response.data[useCaseID].email.body;

            mailOptions  = {
                from: 'IoT Team 1', // sender address
                to: emailSenders, // list of receivers, put your email if you want to test it ;)
                subject: emailSubject, // Subject line
                html: emailBody// plain text body
            };

            transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                    console.log(err);
                else
                    console.log(info);
            });
        })
        .catch(error => {
            console.log(error);
        });

    
    // Send the composed email
};

module.exports = {
    composeEmail
};
