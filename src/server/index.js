const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require("dotenv").config();

app.post("/contact", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    companyName,
    companySize,
    jobTitle,
    messageHeading,
    messageBody,
  } = req.body;

  sgMail.setApiKey(process.env.CONTACT_SENDGRID_API_KEY);
  const msg = {
    to: process.env.CONTACT_EMAIL_TO,
    from: email,
    subject: messageHeading,
    text: `New form submission from ${firstName} ${lastName}:
    Work Email: ${email}
    Company Name: ${companyName}
    Company Size: ${companySize}
    Job Title: ${jobTitle}
    Message Heading: ${messageHeading}
    Message Body: ${messageBody}
    `,
  };

  try {
    await sgMail.send(msg);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while sending the email.");
  }
});
app.post("/contractor", async (req, res) => {
  const {
    firstName,
    lastName,
    companyName,
    industry,
    projectType,
    workSchedule,
    contractLength,
    additionalInformation,
  } = req.body;
  sgMail.setApiKey(process.env.CONTRACTOR_SENDGRID_API_KEY);
  const msg = {
    to: clientEmail,
    from: senderEmail,
    subject: emailSubject,
    text: `New form submission from ${firstName} ${lastName}:
    Email: ${email}
    Company Name: ${companyName}
    Industry: ${industry}
    Project Type: ${projectType}
    Work Schedule: ${workSchedule}
    Contract Length: ${contractLength}
    Additional Information: ${additionalInformation}
    `,
  };

  try {
    await sgMail.send(msg);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while sending the email.");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
