const nodemailer = require('nodemailer');

// Configure the email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'nsa.team1.iot@gmail.com',
           pass: '123123q1'
    }
});

// Compose the new email
const composeEmail = (subject, body) => {
    const mailOptions  = {
        from: 'IoT Team 1', // sender address
        to: 'test.test@gmail.com', // list of receivers, put your email if you want to test it ;)
        subject: subject, // Subject line
        html: body// plain text body
    };

    // Send the composed email
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
}

module.exports = {
    composeEmail
};
