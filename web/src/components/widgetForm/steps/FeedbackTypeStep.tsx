import { FeedbackTypes, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps{
    onFeedbacktypeChnaged:(type: FeedbackTypes)=>void
}

export function FeedbackTypeStep({onFeedbacktypeChnaged}:FeedbackTypeStepProps){
    return(
        <>
            <header>
            <span className="text-xl leanding-6">Deixe seu Feedback</span>
            <CloseButton></CloseButton>
            </header>
            <div className='flex py-8 gap-2 w-full'>
                    
            {Object.entries(feedbackTypes).map(([key,value])=>{
                return(
                    <button
                        key={key}
                        className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 transition-all duration-200 focus:border-brand-500 focus:outline-none'
                        onClick={()=>{onFeedbacktypeChnaged(key as FeedbackTypes)}}
                        type="button"
                    >
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                );
            })}
            </div>
        </>
    )
    
}