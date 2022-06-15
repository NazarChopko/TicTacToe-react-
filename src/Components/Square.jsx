import React, {useContext,useState} from 'react'
import WinnerContext from '../context'



function Square({value,click,idx}) {

    const [isLoading,setIsLoading] = useState(false)

    const context = useContext(WinnerContext)

    if(!context){
        const but = document.getElementById(idx);
        but.dataset.win = ''
    }
    

    if(context && context.includes(idx)){
        const btn = document.getElementById(idx);
        btn.dataset.win = idx
    }   

    
    
    return (
        <div>
            <button id={idx} onClick={click} data-win  data-line={idx} data-player={value} className='square'>{value}</button>
        </div>
    )
}

export default Square
