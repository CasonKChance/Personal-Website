import nodemailer from "nodemailer";
import * as aws from "@aws-sdk/client-ses";

export const handler = async (evt) => {
  const { name, email, message } = JSON.parse(evt.body);

  const ses = new aws.SES({
    apiVersion: "2010-12-01",
    region: "us-east-2",
  });

  let transporter = nodemailer.createTransport({
    SES: { ses, aws },
  });

  let emailProps = await transporter.sendMail({
    from: "casonkchance@gmail.com",
    to: "casonchancewebsite@gmail.com",
    subject: `Name: ${name}`,
    text: `From Contact: ${email} \n ${message}`,
    html: `<div> <p>From Contact: ${email}</p> <p>${message}</p> </div>`,
  });

  return emailProps;
};
