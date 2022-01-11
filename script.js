window.onload = function(){
    let submitButton = document.getElementById('submit-btn');
    let loginButton = document.getElementById('buttonLogin');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let checkInfo = document.getElementById('agreement');
    let textarea = document.getElementById('textarea');
    let counter = document.getElementById('counter');

    loginButton.addEventListener('click', function(event){
        if (email.value === 'tryber@teste.com' & password.value === '123456'){
            alert("Olá, Tryber!");
        }else{
            alert("Email ou senha inválidos.")
        }
    });
    submitButton.disabled = true;
    
    checkInfo.addEventListener('click', function(event){
        if (checkInfo.checked){
            submitButton.disabled = false;
        }else{
            submitButton.disabled = true;
        }
    });

    textarea.addEventListener('input', function(event){
        counter.innerText = 500 - textarea.value.length;
    });

}