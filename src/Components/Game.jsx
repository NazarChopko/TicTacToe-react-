import React,{useState,useEffect,useMemo} from 'react'
import WinnerContext from '../context';
import Board from './Board'
import {checkWinner} from '../checkWinner'
import Modal from './Modal';

function Game() {
    const [board,setBoard] = useState(Array(9).fill(null));
    const [xIsNext,setXisNext] = useState(true)
    const [draw,setDraw] = useState(0)
    const [winLine,setWinLine] = useState([])
    const [modalActive,setModalActive] = useState(false)
    const [player1,setPlayer1] = useState(0)
    const [player2,setPlayer2] = useState(0)

    const winner = useMemo(() => checkWinner(board,setWinLine), [board])
    const playerName = [{'name':'Player 1','id':1},{'name':'Player 2','id':2}];
    
    useEffect(() => {
       setTimeout(()=>setModalActive(true),500)
    }, [])

    useEffect(() => {
        if(winner === 'X'){
            setPlayer1(player1+1)
        }else if(winner === 'O'){
            setPlayer2(player2+1) 
        }
    }, [winner])

    useEffect(() => {
        if(draw === 9 && !winner){
           setTimeout(()=>alert('IT,S DRAW! PLEASE RESTART THE GAME!'),600) }
    }, [board])


    const handleClick = (idx) =>{
         const copyBoard = [...board];

         if(winner || copyBoard[idx]) return

         copyBoard[idx] = xIsNext ? 'X' : 'O';
        
         setBoard(copyBoard);
         setDraw(draw + 1);
         setXisNext(!xIsNext);

    };

    const dropState = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true)
    setDraw(0);
    setWinLine('')
    };


    
    return (
       <>
           <Modal active={modalActive} setActive={setModalActive}> 
              <div><h2>Players</h2></div>
              <ul>
                  <li className='modal_player1'>{playerName[0].name} - X</li>
                  <li className='modal_player2'>{playerName[1].name} - O</li>
              </ul>
              <button onClick={()=> setModalActive(false)}>Начать</button>
            </Modal>
            
            <div className='wrapper'>
            <div className="ticTacName"><span>Tic</span>  <span>Tac</span>  <span>Toe</span></div>
                <button className='wrapper_button' onClick={dropState}>Restart</button>
            <WinnerContext.Provider value={winLine}>
                
            <Board  
                    player1={player1} 
                    player2={player2} 
                    name={playerName} 
                    squares={board} 
                    squareClick={handleClick}/>
            </WinnerContext.Provider>
                
                {winner ? <div className='wrapper_winner'>Победил <strong>{xIsNext ? 'Player 2' : 'Player 1'}</strong>  </div> :null}
            </div>
        </>
    )
}

export default Game
