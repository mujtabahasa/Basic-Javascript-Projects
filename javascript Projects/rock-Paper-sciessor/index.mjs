import PromptSync from "prompt-sync";
let prompt = PromptSync();

  let userInput = prompt('rock , paper , secissor  ')
  let names = ['rock','paper','sciessor'];
  let nameslength = names.length;
  let randomNumbers = Math.floor(Math.random() * nameslength)
  let chooseName = names[randomNumbers];
  console.log(chooseName)
  if (chooseName === userInput){
      console('user Wins')
  }else if(chooseName === 'paper' && userInput === 'sciessor' || userInput === 'rock'){
      console.log('user Wins')
  }else{
      console.log('error')
  }







