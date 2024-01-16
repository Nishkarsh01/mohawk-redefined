// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'nevil@gmail.com',
//     pass: 'abcW23ssd!266D',
//   },
// });

// app.post('/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: 'your_email@gmail.com',
//     to: 'nevil@gmail.com',  
//     subject: 'New Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }

//     res.status(200).send('Email sent: ' + info.response);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
