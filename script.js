const Started=1
const Ended=0
const gametable=document.getElementById('game')
    

const game={
    state:Started,
    turn:'X',
    move:1
}

function endgame(winner)
{
    if(winner)
    {
        alert('Game Over | Winner = '+winner)
    }
    else{
        alert('Game Draw')
    }
    game.state=Ended
}
function restartgame()
{
    if(Math.random()>0.5)game.turn='O'
    else game.turn='O'
    game.state=Started
    game.move=1
    Array.from(document.getElementsByTagName('td')).forEach(cell => {
        cell.textContent = ''
    })
}
function nextturn()
{
    if(game.state===Ended) return
    if(game.move===9)
    {
        endgame()
    }
    if(game.turn==='X') 
    {
        game.turn='O'
    }
    else
    {
        game.turn='X'
    }
    const playerspan=document.getElementById('player')
    playerspan.textContent = game.turn
    game.move++
}

function isseqcaptured(arrayof3cells)
{
    let winningcombo=game.turn+game.turn+game.turn
    if(arrayof3cells.map(i=>i.textContent).join('')===winningcombo)
    {
        endgame(game.turn)
    }
}
function isrowcaptured(row)
{
    let tablerow=Array.from(document.getElementById('game').children[0].children[row-1].children)
    isseqcaptured(tablerow)

}
function iscolcaptured(col)
{
    let tablecol=[
        document.getElementById('game').children[0].children[0].children[col-1],
    document.getElementById('game').children[0].children[1].children[col-1],
    document.getElementById('game').children[0].children[2].children[col-1]
    ]
    isseqcaptured(tablecol)

}

function isdiagcaptured(row,col)
{
    if(row!==col && row+col!==4) return
    let daig1=[
        document.getElementById('game').children[0].children[0].children[0],
        document.getElementById('game').children[0].children[1].children[1],
        document.getElementById('game').children[0].children[2].children[2]
    ]
    let daig2=[
        document.getElementById('game').children[0].children[0].children[2],
        document.getElementById('game').children[0].children[1].children[1],
        document.getElementById('game').children[0].children[2].children[0]
    ]
    isseqcaptured(daig1)
    isseqcaptured(daig2)
    
}
function boxClicked(row, col)
{
    if(game.state===Ended) 
    {
        alert("Game over Restart to play again")
        return
    }
    console.log("Box at position : "+row+", "+col+" is clicked")
    document.getElementById('game').children[0].children[row-1].children[col-1].textContent=game.turn
    isrowcaptured(row)
    iscolcaptured(col)
    isdiagcaptured(row,col)
    nextturn()
}