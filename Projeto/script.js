/**
 * 
 */

function validaCampos(){
	var msgErro= "";
	var user = myForm.user.value;
	var password = myForm.password.value;
	
	if(user == "" || user == undefined) {
		msgErro = ' * Preencha o campo com seu usuário <br>';
	}
	
	if(password == "" || user == password) {
		msgErro = ' * Preencha o campo com sua senha <br>';		
	}
	
	if(msgErro != "") {
		document.getElementById("divErros").innerHTML = msgErro;
		return false;
	}
}