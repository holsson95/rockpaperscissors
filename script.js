const optionBtn = document.querySelectorAll("div.optionBtn button");
            const playerPoints = document.querySelector('#playerScore');
            const computerPoints = document.querySelector('#computerScore');
            const rock = document.querySelector('#rock');
            const paper = document.querySelector('#paper');
            const scissors = document.querySelector('#scissors');
            const winner = document.querySelector('#winner');
          
            let playerScore = 0;
            let computerScore = 0;  
          

          function computerPlay(){ 
              let x = Math.random();
              let result = Math.floor(x*(3))+1;   
              
              if (result === 1){
                  console.log("Computer chose Rock");
              }
              else if(result === 2){   
                  console.log("Computer chose Paper");    
              }
              else if (result === 3){  
              console.log("Computer chose Scissors");    
              }
              return result;
              
          }  

          function startGame() {
              optionBtn.forEach(button => {
                  button.addEventListener('click', getPlayerChoice)
                  ;})
                  
                  }

            
                  
          function getPlayerChoice(e) {
              playerSelection = (e.target.id);
              console.log(playerSelection);
              playRound(playerSelection, computerPlay());
          }

          //begin game
          startGame();
          
          
          
          
         

           
     
          function playRound(playerSelection,computerSelection){
            //play rounds and collect scores 
              if ((playerSelection==="rock" && computerSelection==3)||
              (playerSelection==="scissors" && computerSelection==2)||
              (playerSelection==="paper" && computerSelection==1))
              {
                  console.log("you win");
                  playerScore++;
                  playerPoints.textContent = playerScore;
                  computerPoints.textContent = computerScore;
              }
              else if ((playerSelection==="rock" && computerSelection==1)||
              (playerSelection==="scissors" && computerSelection==3)||
              (playerSelection==="paper" && computerSelection==2))
              {
                  console.log("you tie");
                  playerPoints.textContent = playerScore;
                  computerPoints.textContent = computerScore;
                  
              }
              else {
                  console.log("you lose");    
                  computerScore++;
                  playerPoints.textContent = playerScore;
                  computerPoints.textContent = computerScore;
                  } 
                console.log("player score is "+playerScore,"computer score is "+computerScore); 
            //Announce winner 
                if (playerScore >= 5 && computerScore < 5){
                    winner.textContent="You win!"
                }
                else if (computerScore >= 5 && playerScore<5){
                    winner.textContent="You lose!"
                }       
              }

              