// INICIALIZADOR
window.addEventListener('load', start);


// Variaveis Globais
var title = document.getElementById('title')
var title2 = document.getElementById('title-mobile')
var btn = document.getElementById('btnMessage')
var email = document.getElementById('email')
var message = document.getElementById('message')

function start(){
    typeWrite(title)
    typeWrite(title2)
    
   btn.addEventListener('click', sendEmail)
}


function sendEmail(evt){

    if(message.value =='' || email.value ==''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preencha todos os campos!',
        
          })
          evt.preventDefault()
    }else{
        
        Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Email enviado com sucesso!',
        
          })
    }
    
}

function typeWrite(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) =>{
        setTimeout(function () {
            elemento.innerHTML += letra;
        },150 *i)

    });
    

}