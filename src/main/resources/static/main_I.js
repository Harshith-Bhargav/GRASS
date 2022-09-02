const emailUV = document.querySelector('.emailUV')
const passUV = document.querySelector('.passUV')
const myformUser = document.querySelector('.userV')
var Msg2 = document.querySelector('.msg2')

myformUser.addEventListener('submit',validationUser);

function validationUser(e){
	e.preventDefault();

	if(emailUV.value === '' || passUV.value === ''){
		Msg2.classList.add('error');
		Msg2.innerHTML = 'Please Enter All Fields';

		setTimeout(() => Msg2.remove(), 5000);
	}
	else{
		myformUser.submit();
	}
}