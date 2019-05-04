// @flow

type MailOption = {
  from: string,
  to: string,
  subject: string,
  text: string,
  html: string,
}

type ContactForm = {
  email: string,
  phone: string,
  name: string,
  body: string,
}

export type { ContactForm, MailOption }
