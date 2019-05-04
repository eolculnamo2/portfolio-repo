// @flow
import nodemailer from 'nodemailer';
import type { MailOption } from '../../types/types';

class Mailer {

  email: string;
  name: string;
  subject: string;

  constructor(email: string, name: string, subject: string) {
    this.email = email;
    this.name = name;
    this.subject = subject;
  }

  contactEmail(body: string, phone: string): void {
    const transporter: Object = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: "547575520710-bt1ca5roqf2i4qbjs2pif1jji08ava4m.apps.googleusercontent.com",
        clientSecret: "t45WVwmpfwWsZJV5a-4EKYta",
       // @todo refreshToken: "REFRESH_TOKEN_HERE",
      },
    });
    console.log(process.env.EMAIL)
    // process.env and flow don't mix well: https://github.com/facebook/flow/issues/1192
    const mailOptions: MailOption = {
      // $FlowFixMe
      from: process.env.EMAIL,
      // $FlowFixMe
      to: process.env.ADMINMAIL,
      subject: this.subject,
      text: `HTML Failed. Contact: ${this.email}`,
      html: `<div>Name: ${this.name} <br>Email: ${this.email}<br>Number: ${phone}<br>Message: ${body}</div>`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) console.log(err);
    });
  }
}

export default Mailer;
