/* script JS separado*/
function montaHTML () {
	var text = " Meu Primeiro Codigo em JavaScript <br>";
    for (var i = 0; i < 5; i++)  {
				text += ("<br> Meu Primeiro Codigo em JavaScript </br> ");
			}
    document.getElementById("demo").innerHTML = text;
};

function mostra () {
	
	var nome  = document.getElementById("myForm").elements.namedItem("nome").value;
	var sobrenome  = document.getElementById("myForm").elements.namedItem("sobrenome").value;

	alert(nome + " " + sobrenome);

};

function getUrlVars(a) {
	a = a || window.location.search.substr(1).split('&').concat(window.location.hash.substr(1).split("&"));

    if (typeof a === "string")
        a = a.split("#").join("&").split("&");

    // se não há valores, retorna um objeto vazio
    if (!a) return {};

    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        // obtem array com chave/valor
        var p = a[i].split('=');

        // se não houver valor, ignora o parametro
        if (p.length != 2) continue;

        // adiciona a propriedade chave ao objeto de retorno
        // com o valor decodificado, substituindo `+` por ` `
        // para aceitar URLs codificadas com `+` ao invés de `%20`
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

function montaResposta() {

	queryUrl = getUrlVars();
	var fNome = queryUrl["nome"];
	var fSobrenome = queryUrl["sobrenome"];
	
	document.getElementById("nome").innerHTML = fNome;
	document.getElementById("sobrenome").innerHTML = fSobrenome;
}