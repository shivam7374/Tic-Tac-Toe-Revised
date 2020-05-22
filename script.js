const Started=1
const Ended=0


const game={
    state:Started,
    turn:'X',
}
function nextturn()
{
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

}

function boxClicked(row, col)
{
    console.log("Box at position : "+row+", "+col+" is clicked")
    const gametable=document.getElementById('game')
    gametable.children[0].children[row-1].children[col-1].textContent=game.turn
    nextturn()
}