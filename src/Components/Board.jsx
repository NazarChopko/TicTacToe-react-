import React from 'react'
import Square from './Square'

function Board({squares,squareClick,name,player1,player2}) {
    return (
    
<div className='board_container'>

    <div className='wrapper_board'>
            {squares.map((squar,i)=>(
                <Square key={i} idx={i} value={squar} click={()=>squareClick(i)}/>
            ))}
    </div>
    <div className='division'></div>
     <div className='wrapper_score'>
                Score:
                <div>{name[0].name}: <strong id='1'>{player1}</strong> </div>
                <div>{name[1].name}: <strong id='2'>{player2}</strong> </div>
            </div>
    </div>
        
    )
}

export default Board
