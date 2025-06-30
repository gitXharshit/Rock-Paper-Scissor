
    let score = JSON.parse(localStorage.getItem('score'));
    if(score === null){
      score = {
        wins:0,
        losses:0,
        ties:0
      }
    }
    updateScoreElemenet();
    function playGame(playerMove){
      const computerMove = pickComputerMove();
          let result = '';

          if(playerMove === 'scissor'){
            if(computerMove === 'rock'){
              result = 'you lose';
            }
            else if(computerMove === 'paper'){
              result = 'you win';
            }
            else if(computerMove === 'scissor'){
                result = 'tie..';
            }
           if(result === 'you win') score.wins += 1;
           else if(result === 'you lose') score.losses += 1;
           else if(result === 'tie..') score.ties += 1;

         localStorage.setItem('score', JSON.stringify(score));
                
            updateScoreElemenet();
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML
              =`You <img src = "images/${playerMove}-emoji.png" class = "icons"> 
              <img src = "images/${computerMove}-emoji.png" class = "icons">Computer`;  
              
          }

          else if(playerMove === 'paper'){
            let result = '';
              if(computerMove === 'rock'){
                result = 'you win';
              }
              else if(computerMove === 'paper'){
                result = 'tie..';
              }
              else if(computerMove === 'scissor'){
                result = 'you lose';
              }
               if(result === 'you win') score.wins += 1;
               else if(result === 'you lose') score.losses += 1;
               else if(result === 'tie..') score.ties += 1;

           localStorage.setItem('score', JSON.stringify(score));
            
           updateScoreElemenet();
           document.querySelector('.js-result').innerHTML = result;
           document.querySelector('.js-moves').innerHTML
              =`You <img src = "images/${playerMove}-emoji.png" class = "icons"> 
              <img src = "images/${computerMove}-emoji.png" class = "icons">Computer`;  
            }
          else if(playerMove === 'rock'){
              let result = '';
              if(computerMove === 'rock'){
                result = 'tie..';
              }
              else if(computerMove === 'paper'){
                result = 'you win';
              }
              else if(computerMove === 'scissor'){
                result = 'you lose';
          }
          if(result === 'you win') score.wins += 1;
          else if(result === 'you lose') score.losses += 1;
          else if(result === 'tie..') score.ties += 1;

          localStorage.setItem('score', JSON.stringify(score));

              document.querySelector('.js-result').innerHTML = result;
              document.querySelector('.js-moves').innerHTML
              =`You <img src = "images/${playerMove}-emoji.png" class = "icons"> 
              <img src = "images/${computerMove}-emoji.png" class = "icons">Computer`;  
             updateScoreElemenet();
             
        
        }
    }
    function updateScoreElemenet(){
       document.querySelector('.js-score').innerHTML = 
     `Wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
    }
    function pickComputerMove(){
        let randomNumber = Math.random();
        let computerMove = '';
        if(randomNumber >= 0 && randomNumber < 1/3){
          computerMove = 'rock';
        }
        else if(randomNumber >= 1/3 && randomNumber < 2/3){
          computerMove = 'paper';
        }
        else if(randomNumber >= 2/3 && randomNumber < 1){
          computerMove = 'scissor';
        }
        return computerMove;
    }