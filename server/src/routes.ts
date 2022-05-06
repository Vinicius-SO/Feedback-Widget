import express from "express";
import nodemailer from 'nodemailer'
import { prisma } from "./prisma";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repositories";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-cases";

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6bf50b78446299",
      pass: "40f9396e5441fb"
    }
  });

routes.post('/feedbacks', async (req,res)=>{
    const { type, comment, screenshot } = req.body
    const prismaFeedbackRepository= new PrismaFeedbackRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbackRepository
    )

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    })

    // await transport.sendMail({
    //     from: 'Equipe Feedget <oi.feedget@gmail.com>',
    //     to: 'Vinicius Soares <vinicius.soares.so@gmail.com>',
    //     subject: 'Novo Feedback',
    //     html: [
    //         `<div style="font-family:sans-serif; font-size: 16px; color:#111;">`,
    //         `<p>Tipo do feedback: ${type}</p>`,
    //         `<p>Comentário: ${comment}</p>`,
    //         `</div>`
    //     ].join('\n')
    // })

    return res.status(201).send()
})