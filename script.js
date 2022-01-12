window.onload = function(){
    let submitButton = document.getElementById('submit-btn');
    let loginButton = document.getElementById('buttonLogin');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let checkInfo = document.getElementById('agreement');
    let textarea = document.getElementById('textarea');
    let counter = document.getElementById('counter');
    let form = document.getElementById('evaluation-form');
    
    function createLabel(text){
        let label = document.createElement('label');
        label.innerText = text;
        form.appendChild(label);
    }
    
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

    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        let inputName = document.getElementById('input-name');
        let inputLastname = document.getElementById('input-lastname');
        let house = document.getElementById('house');
        let inputEmail = document.getElementById('input-email');
        let family = document.querySelector('input[name="family"]:checked');
        let rate = document.querySelector('input[name="rate"]:checked');
        let content = document.querySelectorAll('input[name="conteudo"]:checked');
        let contentChecked = "";
        for (values of content){
            contentChecked +=  values.value + ", ";
        }
        contentChecked = contentChecked.substring(0, contentChecked.length - 2);
        form.innerHTML = "";
        createLabel('Nome: ' + inputName.value + " " + inputLastname.value);
        createLabel('Email: ' + inputEmail.value);
        createLabel('Casa: ' + house.value);
        createLabel('Família: ' + family.value);
        createLabel('Matérias: ' + contentChecked);
        createLabel('Avaliação: ' + rate.value);
        createLabel('Observações: ' + textarea.value);
        

    });

}