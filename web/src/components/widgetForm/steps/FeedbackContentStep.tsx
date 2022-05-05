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

        <form className='my-4 w-full'>
            <textarea
                className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-zinc-700 scrollbar-track-transparent scrollbar-thin"
                placeholder='Conte com detalhes o que esta acontecendo...'
            >


            </textarea>

        </form>
    </>
    )
}