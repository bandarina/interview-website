import { resetValues, computerAnswer, progress } from "./src/util.js";

const textarea = document.getElementsByTagName("textarea")[0];
const parent = document.getElementsByClassName("message-area");
let questionIndex = 0;

document.getElementById('send-button').onclick = sendMessage;
textarea.addEventListener("input", OnInput, false);



function escapePressed(e){
  if(e.key === 'Escape'){
    textarea.value = '';
    document.getElementsByClassName('display-escape')[0].style.visibility = 'hidden';
    document.getElementById('send-button').onclick = sendMessage;
    window.removeEventListener('keydown', escapePressed);
    resetValues();
  }
  
}

function editMessage(element){
  document.getElementsByClassName('display-escape')[0].style.visibility = 'visible';

  const parentOfSource = element.srcElement.parentNode;

  textarea.value = parentOfSource.children[1].innerText;

  resetValues();
  
  window.addEventListener('keydown', escapePressed);

  document.getElementById('send-button').onclick = ()=> {
    parentOfSource.children[1].innerText = textarea.value;
    textarea.value = ''
    document.getElementById('send-button').onclick = sendMessage;
    document.getElementsByClassName('display-escape')[0].style.visibility = 'hidden';
    window.removeEventListener('keydown', escapePressed);
    resetValues();
  }
}

function sendMessage(){

    if(textarea.value != ''){
    // Create elements
    const user = document.createElement('div');
    user.setAttribute('class', 'user');

    const img = document.createElement('img')
    img.src = './src/edit.svg';
    img.setAttribute('class', 'edit-note');
    img.onclick = editMessage;

    const message = document.createElement('div');
    message.setAttribute('class', 'user-message');
    message.innerText = textarea.value.trim();


    //Append elements

    user.appendChild(img);
    user.appendChild(message);
    parent[0].appendChild(user);

    // Reset values
    textarea.value = '';
    resetValues();

    // Receive BOT message
    
    setTimeout(()=>{
      computerAnswer(questionIndex)
    }, 1000);
    setTimeout(()=> parent[0].scrollTop = parent[0].scrollHeight - parent[0].clientHeight, 200);
    document.getElementById('send-button').disabled = 'true'
    setTimeout(()=>{
      document.getElementById('send-button').disabled = false;

    }, 3500);

    questionIndex += 1;
    document.getElementById('question').innerHTML = `<b>${questionIndex}</b>`;

  }else{
    return;
  }
  endQuiz();
}


function endQuiz(){
  if(questionIndex>6){
    alert("Works");
  }
progress();
}

function OnInput() {

  resetValues();

}

