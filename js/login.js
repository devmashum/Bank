// step-1: Add click event handler with the submit button 

document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2 get the email address
    // NOTE: always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.a,: set id on the html element 
    // 3.b,: get the element
    // 3.c,: get the value from the element

    const passField = document.getElementById('user-password');
    const password = passField.value;


    // step 4- verify email and password and check whether valid user or not

    if (email === 'demo' && password === '1234') {
        window.location.href = 'bank.html';
    }
    else { alert('Your input is not valid') };




})



