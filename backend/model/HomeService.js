// @flow
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../src/App';
import Mailer from '../modules/Mailer';
import type { ContactForm } from '../../types/types';

class HomeService {
  /**
   * @note Sends SSR template to controller.
   */
  static getSSRHomeView(req): string {
    let context = {};
    const reactDom: string = renderToString(
      <StaticRouter context = {context} location={req.url}>
        <App />
      </StaticRouter>
    );

    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head></head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="/style.css">
      <title>Rob Bertram Front End Developer</title>
    </head>
    <body>
      <div id="app">
      ${reactDom}
      </div>
      <script src="bundle.js"></script>
    </body>
    </html>`);
  }

  /**
   * @note Send contact form to my email.
   */
  static handleContactForm(contactForm: ContactForm): void {
    const { email, phone, name, body } = contactForm;
    const subjectLine: string = `${name} has sent a contact request form`;

    new Mailer(email, name, subjectLine).contactEmail(body, phone);
  }
}

export default HomeService;
