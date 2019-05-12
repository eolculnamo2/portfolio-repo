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

type LayerStats = {
  width: number,
  height: number,
  fill: string,
  border: string,
}

export type { ContactForm, MailOption, LayerStats }
