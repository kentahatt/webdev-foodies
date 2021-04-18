var HTML = 0;

$(document).ready(function(){
    let mainBody = document.getElementById('body');
    let div = document.createElement('div');
    div.id = "changeHTML";
    let a = document.createElement('a');
    a.id = "htmlLink";
    // forced fix
    a.href = "store.html";

    let htmlBody = document.createElement('div');
    htmlBody.id = "htmlBody";
    let htmlHeader = document.createElement('p');
    htmlHeader.innerHTML = "Go to the store page";

    htmlBody.appendChild(htmlHeader)
    a.appendChild(htmlBody);
    div.appendChild(a);
    mainBody.appendChild(div);

    // can't stop the form from refreshing html
    if (HTML == 1){
        let link = document.getElementById('htmlLink');
        link.href = "store.js"
    }
})
function keyPress(){
    let showPassword = document.getElementById('pswd');
    if (showPassword.type == "password"){
        showPassword.type = "text";
        setTimeout(() => {  showPassword.type = "password"; }, 1800);
    }
}

function changeHTML(){
    HTML = 1;
}

function login(){
    $('#body').empty();
    
    let mainBody = document.getElementById('body');
    let div = document.createElement('div');
    div.setAttribute('id', 'logindiv')
    let header = document.createElement('p');
    header.innerHTML = "Log In";
    header.setAttribute('class', 'loginheader');
    div.appendChild(header);

    let divInfo = document.createElement('div');
    let infoOne = document.createElement('p');
    infoOne.innerHTML = "Welcome to Foodies!";
    divInfo.appendChild(infoOne);

    let infoTwo = document.createElement('p');
    infoTwo.innerHTML = "Please Log in";
    infoTwo.setAttribute('id', 'coloured');
    divInfo.appendChild(infoTwo);

    div.appendChild(divInfo);

    let form = document.createElement('form');
    form.setAttribute('onclick', 'changeHTML()');
    form.setAttribute('id', 'signIn');
    form.setAttribute('action', '');
    let labelOne = document.createElement('label');
    labelOne.innerHTML = "Enter Username:";
    let username = document.createElement('input');
    username.type = "text";
    let labelTwo = document.createElement('label');
    labelTwo.innerHTML = "Enter Password:";
    let password = document.createElement('input');
    password.type = "text";

    let submit = document.createElement('input');
    submit.onsubmit = "return false";
    submit.id = "submit";
    submit.type = "submit";
    submit.value = "Create Account";

    form.appendChild(labelOne);
    form.appendChild(username);
    form.appendChild(labelTwo);
    form.appendChild(password);
    form.appendChild(submit);

    div.appendChild(form);
    mainBody.appendChild(div);
}

function createAccount(){
    $('#body').empty();
    
    let mainBody = document.getElementById('body');
    let div = document.createElement('div');
    div.setAttribute('id', 'logindiv')
    let header = document.createElement('p');
    header.innerHTML = "Create an Account";
    header.setAttribute('class', 'loginheader');
    div.appendChild(header);

    let divInfo = document.createElement('div');
    let infoOne = document.createElement('p');
    infoOne.innerHTML = "Welcome to Foodies!";
    divInfo.appendChild(infoOne);

    let infoTwo = document.createElement('p');
    infoTwo.innerHTML = "Please Create Account";
    infoTwo.setAttribute('id', 'coloured');
    divInfo.appendChild(infoTwo);

    div.appendChild(divInfo);

    let form = document.createElement('form');
    form.setAttribute('onclick', 'changeHTML()');
    form.setAttribute('id', 'signIn');
    form.setAttribute('action', '');
    let labelOne = document.createElement('label');
    labelOne.innerHTML = "Create Username:";
    let username = document.createElement('input');
    username.type = "text";
    let labelTwo = document.createElement('label');
    labelTwo.innerHTML = "Create Password:";
    let password = document.createElement('input');
    password.type = "text";

    let submit = document.createElement('input');
    submit.onsubmit = "return false";
    submit.id = "submit";
    submit.type = "submit";
    submit.value = "Create Account";

    form.appendChild(labelOne);
    form.appendChild(username);
    form.appendChild(labelTwo);
    form.appendChild(password);
    form.appendChild(submit);

    div.appendChild(form);
    mainBody.appendChild(div);
}


// after submit is clicked. erase what was there and make a "go to store <a>"
// for both login and create account