/**
 * script JS separado ******
 * 
 * @author Cássio Trindade
 * @date 16/07/2015
 * 
 * Função que inclui um texto no HTML
 */
function montaHTML() {
	var text = " Meu Primeiro Codigo em JavaScript";
	for (var i = 0; i < 5; i++) {
		text += ("<br> Meu Primeiro Codigo em JavaScript </br> ");
	}
	document.getElementById("demo").innerHTML = text;
};

/**
 * @author Cássio Trindade
 * @date 16/07/2015
 * 
 * Função que dispara alerta na pagina
 */
function mostra() {

	var nome = document.getElementById("myForm").elements.namedItem("nome").value;
	var sobrenome = document.getElementById("myForm").elements
			.namedItem("sobrenome").value;

	alert(nome + " " + sobrenome);

};
/**
 * @author Cássio Trindade
 * @date 16/07/2015
 * 
 * Função que extrai os parâmetros da url
 */
function getUrlVars(a) {
	// 
	console.log(window.location.search.substr(1).split('&'));
	console.log(window.location.hash.substr(1).split("&"));
	a = a
			|| window.location.search.substr(1).split('&').concat(
					window.location.hash.substr(1).split("&"));

	// verifica se a tem o tipo String
	if (typeof a === "string")
		a = a.split("#").join("&").split("&");

	// se não ha valores, retorna um objeto vazio
	if (!a)
		return {};

	var b = {};
	for (var i = 0; i < a.length; ++i) {
		// obtem array com chave/valor
		var p = a[i].split('=');

		// se não houver valor, ignora o parâmetro
		if (p.length != 2)
			continue;

		// adiciona a propriedade chave ao objeto de retorno
		// com o valor decodificado, substituindo `+` por ` `
		// para aceitar URLs codificadas com `+` ao invés de `%20`
		b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
	}
	return b;
}
/**
 * @author Cássio Trindade
 * @date 16/07/2015
 * 
 * Função que monta a resposta na pagina de cadastro Concatenando os dados
 * cadastrais em uma frase.
 */
function montaResposta() {
	queryUrl = getUrlVars(); // executa a função getUrlVars() criando um
	// array com os parâmetros
	var fNome = queryUrl["nome"];
	var fSobrenome = queryUrl["sobrenome"];
	var fEmail = queryUrl["email"];
	var fSexo = queryUrl["sexo"];
	var fLazer = queryUrl["lazer"];
	var fLazer1 = queryUrl["lazer1"];
	var fLazer2 = queryUrl["lazer2"];
	var fCarro = queryUrl["carro"];

	// verifica os campos e faz transformações
	var saudacao = (fSexo == "M") ? "O senhor " : "A senhora ";
	fSexo = (fSexo == "M") ? "masculino" : "feminino";

	var lazer = " e gosta de ";
	if (typeof (fLazer) != "undefined") {
		lazer += fLazer;
	}
	if (typeof (fLazer1) != "undefined") {
		lazer += "," + fLazer1;
	}
	if (typeof (fLazer2) != "undefined") {
		lazer += "," + fLazer2;
	}
	if (lazer == " e gosta de ") {
		lazer = "";
	}
	var fTexto = saudacao + fNome + " " + fSobrenome + " é do sexo " + fSexo
			+ lazer;

	// inclui o texto no HTML
	document.getElementById("texto").innerHTML = fTexto;
}
/**
 * @author Cássio Trindade
 * @date 16/07/2015
 * 
 * Função que valida os campos do HTML
 */

function validaCampos() {
	var msgErro = "";
	var nome = myForm.nome.value;
	var sobrenome = myForm.sobrenome.value;

	if (nome == "" || nome == undefined) {
		msgErro = ' * Preencha o campo com seu nome <br>';
	}

	if (sobrenome == "" || sobrenome == undefined) {
		msgErro += ' * Preencha o campo com seu sobrenome <br>';
	}

	if (msgErro != "") {
		document.getElementById("divErros").innerHTML = msgErro;
		return false;
	}
}
/**
 * @author Cássio Trindade
 * @date 20/07/2015
 * 
 * Pega dos dados de um arquivo, aberto pelo JS
 */
function pegarArquivo(arquivoSelecionado) {

	if (arquivoSelecionado.files) {
		var file = arquivoSelecionado.files[0];
		document.getElementById('atributos').innerHTML = '  nome do arquivo: '
				+ file.name + ';  tipo do arquivo: ' + file.type
				+ ';  tamanho do arquivo: ' + file.size + ' bytes';
		 var file = inputFile.files[0];
	   
	}
}
/**
 * @author Cássio Trindade
 * @date 20/07/2015
 * 
 * Pega dum arquivo de imagens
 */
function pegarImagem(files) {
	var imgLoca = document.getElementById('imgLocal')
	var file = files[0];
	var img = document.createElement("img");
	img.file = file;

	imgLocal.appendChild(img)

	var reader = new FileReader();
	reader.onload = (function(aImg) {
		return function(e) {
			aImg.src = e.target.result;
		};
	})(img);
	reader.readAsDataURL(file);
}
