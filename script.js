window.onload = function(){
    let buttonLogin = document.getElementById('buttonLogin');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    buttonLogin.addEventListener('click', function(event){
        if (email.value === 'tryber@teste.com' & password.value === '123456'){
            alert("Olá, Tryber!");
        }else{
            alert("Email ou senha inválidos.")
        }
    });
}