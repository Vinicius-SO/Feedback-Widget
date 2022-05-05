import { ArrowLeft } from 'phosphor-react'

import { feedbackTypes, FeedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackTypes
    onFeedbackRestartRequest: ()=>void
}

export function FeedbackContentStep({ feedbackType,onFeedbackRestartRequest }:FeedbackContentStepProps){
    
    const feedbackTypesInfo = feedbackTypes[feedbackType]

    return(
        <>
        <header>
            <button>
                <button type="button" className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'>
                    <ArrowLeft 
                    weight='bold' 
                    className='w-4 h-4'
                    onClick={onFeedbackRestartRequest}
                    />
                </button>
            </button>
            <span className="text-xl leanding-6 flex items-center gap-2">
                <img src={ feedbackTypesInfo.image.source } alt={feedbackTypesInfo.image.alt} className="w-6 h-6"/>
                { feedbackTypesInfo.title}
            </span>
            <CloseButton/>
        </header>

        <div className='flex py-8 gap-2 w-full'>

                
        </div>
    </>
    )
}