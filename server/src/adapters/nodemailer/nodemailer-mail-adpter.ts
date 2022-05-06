import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from "../mail-adpter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6bf50b78446299",
      pass: "40f9396e5441fb"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){

        await transport.sendMail({
        from: 'Equipe Feedget <oi.feedget@gmail.com>',
        to: 'Vinicius Soares <vinicius.soares.so@gmail.com>',
        subject,
        html: body
        })
    }
}