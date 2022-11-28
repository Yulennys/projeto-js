function git() {
    console.log("O link foi clicado");
}

//API HTTP Github
var idGitHub = document.getElementById("submitBtn");
var nomeGitHub = document.getElementById("nomeGitHub");
var linkGitHub = document.getElementById("linkGitHub");

function github(e) {
  fetch("https://api.github.com/users/Yulennys/repos")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((data) => {
        nomeGitHub.innerHTML += "<p/>" + data.name;
        linkGitHub.innerHTML += "<p/>" + data.html_url;
      });

      console.log(data);
    })
    .catch((e) => console.log("Erro:" + e));

    //Desabilitar botão listar após um clique por uns segundos
    e.disabled = true;
    setTimeout(function(){
        toggleDisabled(e)
      },99999);
  
  function toggleDisabled(elem){
    elem.disabled = !elem.disabled;
  }
}

//Validação do formulário
const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const mensagemTextarea = document.querySelector('#mensagem');
const submitButton = document.querySelector('#submitbutton');

const errorMessage = document.querySelector('.sms');

submitButton.addEventListener('click', (e) =>{
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const mensagemValue = mensagemTextarea.value;

    if (nameValue === '' || emailValue === ''  || mensagemValue === '') {
        errorMessage.textContent = ("Favor preencher todos os campos!");
        
        setTimeout(() => {
            errorMessage.textContent = ("");
        }, 4000);
        return;
    }

    if (emailValue.search("@") == -1) {
        errorMessage.textContent = ("E-mail incorreto!.");
        
        setTimeout(() => {
            errorMessage.textContent = ("");
        }, 4000);
        return;
      
    }

    nameInput.value = '';
    emailInput.value = '';
    mensagemTextarea.value = '';
});