const signUpButton = document.getElementById('admin');
const signInButton = document.getElementById('user');
const container = document.getElementById('container');
const signinadmin = document.getElementById('signin_admin')
const email = document.querySelector('.email')
const pass = document.querySelector('.pass')
const emailV = document.querySelector('.emailV')
const passV = document.querySelector('.passV')
const myform = document.querySelector('.admin')
const myformAcc = document.querySelector('.accV')
var Msg = document.querySelector('.msg')
var Msg1 = document.querySelector('.msg1')

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

myform.addEventListener('submit',validation);

function validation(e){
	e.preventDefault();

	if(email.value === '' || pass.value === ''){
		Msg.classList.add('error');
		Msg.innerHTML = 'Please Enter All Fields';

		setTimeout(() => Msg.remove(), 5000);
	}
	else{
		myform.submit();
	}
}

myformAcc.addEventListener('submit',validationAcc);

function validationAcc(e){
	e.preventDefault();

	if(emailV.value === '' || passV.value === ''){
		Msg1.classList.add('error');
		Msg1.innerHTML = 'Please Enter All Fields';

		setTimeout(() => Msg1.remove(), 5000);
	}
	else{
		myformAcc.submit();
	}
}



