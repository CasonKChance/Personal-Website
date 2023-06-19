import express from "express";
import { SES } from "@aws-sdk/client-ses";

const router = express.Router();

const ses = new SES({
  accessKeyId: process.env.SECRET_KEY_AWS,
  accessSecretKey: process.env.SECRET_KEY_AWS,
  region: "us-east-2",
});

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  await sesEmail(name, email, message);
  res.redirect("http://www.casonkchance.com/");
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
