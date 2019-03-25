let board = []
let winner = false;
console.log("working")
console.dir(document.getElementById('player'))
let boardFull = true



function play(id){

  let box = document.getElementById(id)
  let playerSpan = document.getElementById('player')

  if (playerSpan.innerText=== 'X'){
    playerSpan.innerText = 'O'
    box.innerText = "X"
    board[+box.id] = "X"
    console.dir(box)

  }
  else {playerSpan.innerText = 'X'
  box.innerText = "O"
  board[+box.id] = "O"
  console.dir(box)
  
  }

  console.log(board)
  
  const topLeft = board[0]
  const topMiddle = board[1]
  const topRight = board[2]
  const middleLeft = board[3]
  const center = board[4]
  const middleRight = board[5]
  const bottomLeft = board[6]
  const bottomMiddle = board[7]
  const bottomRight = board[8]

  if(topLeft !== undefined && topLeft === topMiddle && topMiddle === topRight){
    alert (`${topLeft} is the winner!`)
    winner = topLeft
    return
    
  }
  if(topLeft !== undefined && topLeft === center && topLeft === bottomRight){
    alert (`${topLeft} is the winner!`)
    winner = topLeft
    return
  }
  if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    alert (`${topLeft} is the winner!`)
    winner = topLeft
    return
  }
  if (topMiddle !== undefined && topMiddle === center && topMiddle === bottomMiddle){
    alert (`${topMiddle} is the winner!`)
    winner = topMiddle
    return
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    alert (`${topRight} is the winner!`)
    winner = topRight
    return
  }
  if(middleLeft !== undefined && middleLeft === center && middleLeft === middleRight){
    alert (`${middleLeft} is the winner!`)
    winner = middleLeft
    return
  }
  if(bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
    alert (`${bottomLeft} is the winner!`)
    winner = bottomLeft
    return
  }
  if(bottomLeft != undefined && bottomLeft === center && bottomLeft === topRight){
    alert (`${bottomLeft} is the winner!`)
    winner = bottomLeft
    return
  }


  for (let i = 0; i < 8 ; i++){
    if (board[i] === undefined){
      boardFull = false
    }
  }
    if (boardFull === true){
    alert (`board full!`)
    }
  
  console.log(winner)

  }
  function reset(){
    if (boardFull || winner){
      console.log(board)
        for (let i = 0; i < board.length; i++){
          
          document.getElementById(i.toString()).innerText = ""
        

        }
        board = []
        console.log(board)
      // for (let i = 0; i< board.length; i++){
      //   board[i] = 'empty'
      //   return console.log(board)
      // }

    }

    else {alert("Game isn't over yet")
          return console.log(board)
        }


  }

  // if (winner){
  //   alert (`${playerSpan.innerText} is the winner!`)
  //   return
  // }
  //this didn't work.  
  // test console.log(playerSpan.innerText)


