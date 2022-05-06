import { SubmitFeedbackUseCase } from "./submit-feedback-use-cases"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    {sendMail: sendMailSpy}
)

describe('Submit feedback', ()=>{
    it('should be able to submit a feedback', async()=>{  
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'example comment',
            screenshot: 'data:image/png;base64,812318738njdsnjdnsjdsnadjna233',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should be able to submit a feedback without a type', async()=>{

        await expect(submitFeedback.execute({
            type:'',
            comment:'example comment',
            screenshot: 'data:image/png;base64,812318738njdsnjdnsjdsnadjna233',
        })).rejects.toThrow();
    });

    it('should be able to submit a feedback without a comment', async()=>{

        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'',
            screenshot: 'data:image/png;base64,812318738njdsnjdnsjdsnadjna233',
        })).rejects.toThrow();
    });

    it('should be able to submit a feedback if screenshot does not starts with data:image/png;bsae64', async()=>{

        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'example of comment',
            screenshot: '812318738njdsnjdnsjdsnadjna233',
        })).rejects.toThrow();
    });
});