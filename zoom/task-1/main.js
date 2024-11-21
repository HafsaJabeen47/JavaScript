let btn = document.querySelector('#btn');

let naame = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

let nameError = document.querySelector('#name-error');
let emailError = document.querySelector('#email-error');
let pwdError = document.querySelector('#pwd-error');

let mainCont = document.querySelector('.main-cont');
let data = document.querySelector('.data');


// print data
let pName = document.querySelector('#p-name');
let pEmail = document.querySelector('#p-email');
let pPassword = document.querySelector('#p-password');

let done = document.querySelector('#done');



// go
btn.addEventListener('click',()=>{
    let getName = naame.value;
    console.log(getName);
    pName.textContent = getName;

    let getEmail = email.value;
    console.log(getEmail);
    pEmail.textContent = getEmail;

    let getPwd = password.value;
    console.log(getPwd);
    pPassword.textContent = getPwd;

    if(naame.value === ''){
        nameError.classList.add('error');
        nameError.textContent = '*Required';
    }else if( naame.value.length <= 5){
        nameError.classList.add('error');
        nameError.textContent = '*Please enter your fullname';
        nameError.style.left = '131px';
    }

    if(email.value === ''){
        emailError.classList.add('error');
        emailError.textContent = '*Required';
    }else if(email.value.length <= 5 || email.value !== '@gmail.com'){
        emailError.classList.add('error');
        emailError.textContent = '*Invalid email address';
        emailError.style.left = '165px';
    }

    if(password.value === ''){
        pwdError.classList.add('error');
        pwdError.textContent = '*Required';
    }else if(password.value.length <= 5){
        pwdError.classList.add('error');
        pwdError.textContent = '*Weak Password';
        pwdError.style.left = '195px';
    }

    if(naame.value === '' || email.value === '' || password.value === ''){
        mainCont.style.display = 'flex';
        data.style.display = 'none';
    }else{
        mainCont.style.display = 'none';
        data.style.display = 'flex';
    }


});


// back
done.addEventListener('click', ()=>{
    mainCont.style.display = 'flex';
    data.style.display = 'none';

    // jab done pe click kr k wapis form pe aen to for ko blank kesy krwaen gen i mean previous data ko waha se display none kesy kren gen?

});







// ..............................how to write && operator
// if(naame.value === '' && email.value === '' && password.value === ''){
    //     nameError.classList.add('error');
    //     nameError.textContent = '*Required';

    //     emailError.classList.add('error');
    //     emailError.textContent = '*Required';

    //     pwdError.classList.add('error');
    //     pwdError.textContent = '*Required';

    //     mainCont.style.display = 'flex';
    //     data.style.display = 'none';

    // }else{
    //     mainCont.style.display = 'none';
    //     data.style.display = 'flex';
    // }








// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// declare inside event
// btn.addEventListener('click',()=>{
//     let naame = document.querySelector('#name').value;
//     console.log(naame);
//     pName.textContent = naame;

//     let email = document.querySelector('#email').value;
//     console.log(email);
//     pEmail.textContent = email;

//     let password = document.querySelector('#password').value;
//     console.log(password);
//     pPassword.textContent = password;



//     mainCont.style.display = 'none';
//     data.style.display = 'flex';
// });
