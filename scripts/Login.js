function login(){
    $('#body').empty();
    
    console.log('hey')
    let mainBody = document.getElementById('body');
    let div = document.createElement('div');
    div.setAttribute('id', 'logindiv')
    let header = document.createElement('p');
    header.innerHTML = "Log In";
    header.setAttribute('class', 'loginheader');
    div.appendChild(header);

    let divInfo = document.createElement('div');
    let infoOne = document.createElement('p');
    infoOne.innerHTML = "Welcome to Cheese Mark";
    divInfo.appendChild(infoOne);

    let infoTwo = document.createElement('p');
    infoTwo.innerHTML = "Please Log in";
    infoTwo.setAttribute('id', 'coloured');
    divInfo.appendChild(infoTwo);

    div.appendChild(divInfo);

    let signIn = document.createElement('table');
    signIn.setAttribute('id', 'signIn');
    let headerOne = document.createElement('tr');
    let usernameText = document.createElement('td');
    usernameText.innerHTML = 'Enter Username:';
    headerOne.appendChild(usernameText);
    signIn.appendChild(headerOne);

    let headerTwo = document.createElement('tr');
    let username = document.createElement('td');
    let inputOne = document.createElement('input');
    inputOne.setAttribute('type', 'text');
    inputOne.setAttribute('size', '40');
    username.appendChild(inputOne);
    headerTwo.appendChild(username);
    signIn.appendChild(headerTwo);

    let headerThree = document.createElement('tr');
    let passwordText = document.createElement('td');
    passwordText.innerHTML = 'Enter Password:';
    headerThree.appendChild(passwordText);
    signIn.appendChild(headerThree);

    let headerFour = document.createElement('tr');
    let password = document.createElement('td');
    let inputTwo = document.createElement('input');
    inputTwo.setAttribute('type', 'password');
    inputTwo.setAttribute('size', '40');
    password.appendChild(inputTwo);
    headerFour.appendChild(password);
    signIn.appendChild(headerFour);

    div.appendChild(signIn);

    let signButton = document.createElement('div');
    signButton.setAttribute('id', 'login');
    let link = document.createElement('a');
    link.innerHTML = 'Login';
    link.setAttribute('href', 'Login.html');
    signButton.appendChild(link);
    div.appendChild(signButton);

    mainBody.appendChild(div);
}

function createAccount(){
    $('#body').empty();
    
    console.log('hey')
    let mainBody = document.getElementById('body');
    let div = document.createElement('div');
    div.setAttribute('id', 'logindiv')
    let header = document.createElement('p');
    header.innerHTML = "Create an Account";
    header.setAttribute('class', 'loginheader');
    div.appendChild(header);

    let divInfo = document.createElement('div');
    let infoOne = document.createElement('p');
    infoOne.innerHTML = "Welcome to Cheese Mark";
    divInfo.appendChild(infoOne);

    let infoTwo = document.createElement('p');
    infoTwo.innerHTML = "Please Create Account";
    infoTwo.setAttribute('id', 'coloured');
    divInfo.appendChild(infoTwo);

    div.appendChild(divInfo);

    let signIn = document.createElement('table');
    signIn.setAttribute('id', 'signIn');
    let headerOne = document.createElement('tr');
    let usernameText = document.createElement('td');
    usernameText.innerHTML = 'Create Username:';
    headerOne.appendChild(usernameText);
    signIn.appendChild(headerOne);

    let headerTwo = document.createElement('tr');
    let username = document.createElement('td');
    let inputOne = document.createElement('input');
    inputOne.setAttribute('type', 'text');
    inputOne.setAttribute('size', '40');
    username.appendChild(inputOne);
    headerTwo.appendChild(username);
    signIn.appendChild(headerTwo);

    let headerThree = document.createElement('tr');
    let passwordText = document.createElement('td');
    passwordText.innerHTML = 'Create Password:';
    headerThree.appendChild(passwordText);
    signIn.appendChild(headerThree);

    let headerFour = document.createElement('tr');
    let password = document.createElement('td');
    let inputTwo = document.createElement('input');
    inputTwo.setAttribute('type', 'password');
    inputTwo.setAttribute('size', '40');
    password.appendChild(inputTwo);
    headerFour.appendChild(password);
    signIn.appendChild(headerFour);

    div.appendChild(signIn);

    let signButton = document.createElement('div');
    signButton.setAttribute('id', 'login');
    let link = document.createElement('a');
    link.innerHTML = 'Create Account';
    link.setAttribute('href', 'Login.html');
    signButton.appendChild(link);
    div.appendChild(signButton);

    mainBody.appendChild(div);
}