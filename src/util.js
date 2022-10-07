const wordCounter = document.getElementsByClassName('word-counter')[0];
const questionCounter = document.getElementsByClassName('question-counter')[0];
const messageArea = document.getElementsByClassName('message-area')[0];
const textarea = document.querySelectorAll('textarea')[0];
const progressBar = document.getElementsByClassName('progress')[0];

export function resetValues(){
    const wordsArray = textarea.value.split(/\s/);
    textarea.style.height = 0;
    textarea.style.height = (textarea.scrollHeight) + "px";
    wordCounter.style.bottom = `${parseInt(textarea.clientHeight, 10) + 70}px`;
    questionCounter.style.bottom = `${parseInt(textarea.clientHeight, 10) + 63}px`;
    document.getElementById('words').innerText = wordsArray.filter(element => element).length;
  
    if(wordsArray.filter(element=>element).length<25){
      document.getElementsByClassName('word-bar')[0].style = 'background-color: red';
      document.getElementsByClassName('word-bar')[1].style = 'background-color: transparent';
      document.getElementsByClassName('word-bar')[2].style = 'background-color: transparent';
    }
    else if(wordsArray.filter(element=>element).length<50){
      document.getElementsByClassName('word-bar')[0].style = 'background-color: yellow';
      document.getElementsByClassName('word-bar')[1].style = 'background-color: yellow';
      document.getElementsByClassName('word-bar')[2].style = 'background-color: transparent';
    }
    else if(wordsArray.filter(element=>element).length>=50){
      document.getElementsByClassName('word-bar')[0].style = 'background-color: green';
      document.getElementsByClassName('word-bar')[1].style = 'background-color: green';
      document.getElementsByClassName('word-bar')[2].style = 'background-color: green';
    }
  }


const questions = ['Why should we hire you?', 'Tell me about a time when you had to extend a deadline.', 'Why do you feel you would be a good fit for this position?',
  'Talk about a work environment that you think would be ineffective for you.', 'Do you prefer a stable day-to-day routine or a dynamic constantly changing environment?',
  'What would your ideal job be like?', 'What are your career goals, and how do you plan to achieve them?'];

export function computerAnswer(index){
 
    const computerMessage = document.createElement('div');
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    computerMessage.setAttribute('class', 'typing');

    computerMessage.appendChild(span);
    computerMessage.appendChild(span2);
    computerMessage.appendChild(span3);

    messageArea.appendChild(computerMessage);
    
    
    setTimeout(()=>{ 
        
        computerMessage.setAttribute('class', 'computer-message');
        computerMessage.innerText = questions[index];
        setTimeout(()=> messageArea.scrollTop = messageArea.scrollHeight - messageArea.clientHeight, 100);
    },2000);
    
    messageArea.scrollTop = messageArea.scrollHeight - messageArea.clientHeight;
}


export function progress(){
  const progressWidth = parseFloat(progressBar.style.width, 10) ? parseFloat(progressBar.style.width, 10) : 0;
  const increment = 100 / questions.length;
  progressBar.style.width = `${progressWidth + increment}%`;
  
  
}

