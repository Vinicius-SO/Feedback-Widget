import { CloseButton } from '../CloseButton'

import bugImgURL  from '../../assets/bug.svg'
import ideaImgURL  from '../../assets/idea.svg'
import toughtImgURL from '../../assets/thought.svg'
import { useState } from 'react'
import { FeedbackTypeStep } from './steps/FeedbackTypeStep'
import { FeedbackContentStep } from './steps/FeedbackContentStep'
import { FeedbackSucessStep } from './steps/FeedbackSucessStep'

export const feedbackTypes = {
    BUG:{
        title:'Problema',
        image:{
            source:bugImgURL,
            alt:'Emoji de um inseto'
        }
    },
    IDEA:{
        title:'Ideia',
        image:{
            source:ideaImgURL,
            alt:'Emoji de uma lâmpada'
        }
    },
    OTHER:{
        title:'Outro',
        image:{
            source:toughtImgURL,
            alt:'Emoji de um balão de pensamento'
        }
    }
}


export type FeedbackTypes = keyof typeof feedbackTypes

export function WidgetForm(){
    
    const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>()
    const [ feedbackSent, setFeedbackSent] = useState(false)
    

    function handleRestartFeedback(){
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent?(
                <FeedbackSucessStep onFeedbackRestartRequest={handleRestartFeedback} 
                />
            ):(
                <>
                     {!feedbackType ? ( 
                        <FeedbackTypeStep onFeedbacktypeChnaged={setFeedbackType}/>
                    ):(
                        <FeedbackContentStep
                        onFeedbackSent={()=>{setFeedbackSent(true)}}
                        feedbackType={feedbackType}
                        onFeedbackRestartRequest= {handleRestartFeedback} 
                        />
                    )}      
                </>
            )}

           
            <footer className="test-xs text-neutral-400">
                Feito com ❤ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )   
}