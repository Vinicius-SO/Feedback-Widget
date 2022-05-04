import { CloseButton } from './CloseButton'

import bugImgURL  from '../assets/bug.svg'
import ideaImgURL  from '../assets/idea.svg'
import toughtImgURL from '../assets/thought.svg'

const feedbackTypes = {
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

export function WidgetForm(){
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leanding-6">Deixe seu Feedback</span>
                <CloseButton></CloseButton>
            </header>

            <div className='flex py-8 gap-2 w-full'>
                {Object.entries(feedbackTypes).map(([key,value])=>{
                    return(
                        <button
                            className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 transition-all duration-200 focus:border-brand-500 focus:outline-none'
                            // onClick={}
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>

            <footer className="test-xs text-neutral-400">
                Feito com ❤ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )   
}