import express from "express";
import { SES } from "@aws-sdk/client-ses";

const router = express.Router();

const ses = new SES({
  accessKeyId: process.env.AWS_SECRET_KEY,
  accessSecretKey: process.env.AWS_SECRET_KEY,
  region: "us-east-2",
});

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  await sesEmail(name, email, message);
  const redirectURL = "http://localhost:5173/";
  res.redirect(redirectURL);
});

function sesEmail(name, emailFrom, message) {
  const params = {
    Destination: {
      ToAddresses: ["casonchancewebsite@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: `From Contact: ${emailFrom} \n ${message}`,
        },
      },
      Subject: {
        Data: `Name: ${name}`,
      },
    },
    Source: "casonkchance@gmail.com",
  };
  return ses.sendEmail(params);
}

export default router;
