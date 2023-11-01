// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 20/10/2023
// Objetivo: Mostra as opções de testes de rotas disponíveis

// Rota |Teste 
// Baseados nas linhas abaixo do arquivo /src/router.ts no backend:
//routes.post("/signup", userValidator, signup.handle);
//routes.post("/login", login.handle);
// /signup |
// /login  |
// /

"use strict";
import {teste_rota_resetar_db} from "./testes/rotas/resetar_db.js";
import {teste_rota_signup} from "./testes/rotas/signup.js";
import {Token} from "./Token.js";
import {teste_rota_login} from "./testes/rotas/login.js";

import {teste_rota_inserir_fluxo} from "./testes/rotas/inserir_fluxo.js";
import {teste_rota_ler_fluxo} from "./testes/rotas/ler_fluxo.js";
import {teste_rota_editar_fluxo} from "./testes/rotas/editar_fluxo.js";
import {teste_rota_excluir_fluxo} from "./testes/rotas/excluir_fluxo.js";

import {teste_rota_inserir_fluxo_filho} from "./testes/rotas/inserir_fluxo_filho.js";

import {teste_rota_inserir_texto} from "./testes/rotas/inserir_texto.js";
import {teste_rota_ler_texto} from "./testes/rotas/ler_texto.js";
//import {teste_rota_editar_texto} from "./testes/rotas/editar_texto.js";
//import {teste_rota_excluir_texto} from "./testes/rotas/excluir_texto.js";

export let token_obj = new Token; // Cria um objeto 'Token' para guardar o token ao realizar login

function inicializar_testes() {
	console.log("Entrou em: function inicializar_testes()");
	
	const body = document.getElementsByTagName("body");
	//console.log("Pré inserção: body.innerHTML ="+body.innerHTML); // Debug
	console.log("Pré inserção: body.innerHTML ="+body[0].innerHTML); // Debug -- como usa 'getElements' (plural) retorna um array - tem que instanciar o primeiro elemento !
	
	const insercao = document.getElementById("local_de_insercao");
	
	// DB:
	let but_teste_rota_resetar_db = "<div><button id=\"teste_rota_resetar_db\">Teste_de_Rota-Resetar_db</button></div>";
	
	
	// Users:
	let but_teste_rota_signup = "<div><button id=\"teste_rota_signup\">Teste_de_Rota-Signup</button></div>";		
	let but_teste_rota_login = "<div><button id=\"teste_rota_login\">Teste_de_Rota-Login</button></div>";
	
	
	// Fluxos:
	const html_teste_rota_fluxo =
		"<div class=\"rota\">\
			<div>Teste de Rota - Fluxo</div>\
			<select id=\"tr_fluxo-select\">\
				<option value=\"inserir\">Inserir</option>\
				<option value=\"ler\">Ler</option>\
				<option value=\"editar\">Editar</option>\
				<option value=\"excluir\">Excluir</option>\
			</select>\
			id:<input type=\"number\" id=\"tr_fluxo-id\" min=\"0\" max=\"1000\ step=\"1\" value=\"1\">\
			paiId:<input type=\"number\" id=\"tr_fluxo-paiId\" min=\"0\" max=\"1000\ step=\"1\" value=\"1\">\
			titulo:<input type=\"text\" id=\"tr_fluxo-titulo\" value=\"Título\">\
			<div>html:<textarea id=\"tr_fluxo-html\" rows=\"4\" cols=\"50\">HTML</textarea></div>\
			<button id=\"tr_fluxo-testar\">Testar!</button>\
		</div>";
		
		
	//let but_teste_rota_inserir_fluxo = "<div><button id=\"teste_rota_inserir_fluxo\">Teste_de_Rota-inserir_fluxo</button></div>";	 DELETAR
	let but_teste_rota_ler_fluxo = "<div><button id=\"teste_rota_ler_fluxo\">Teste_de_Rota-ler_fluxo</button></div>";	
	let but_teste_rota_editar_fluxo = "<div><button id=\"teste_rota_editar_fluxo\">Teste_de_Rota-editar_fluxo</button></div>";	
	let but_teste_rota_excluir_fluxo = "<div><button id=\"teste_rota_excluir_fluxo\">Teste_de_Rota-excluir_fluxo</button></div>";
	
	let but_teste_rota_inserir_fluxo_filho = "<div><button id=\"teste_rota_inserir_fluxo_filho\">Teste_de_Rota-inserir_fluxo_filho</button></div>";	
	
	// Textos:
	let but_teste_rota_inserir_texto = "<div><button id=\"teste_rota_inserir_texto\">Teste_de_Rota-inserir_texto</button></div>";	
	let but_teste_rota_ler_texto = "<div><button id=\"teste_rota_ler_texto\">Teste_de_Rota-ler_texto</button></div>";	
	let but_teste_rota_editar_texto = "<div><button id=\"teste_rota_editar_texto\">Teste_de_Rota-editar_texto</button></div>";	
	let but_teste_rota_excluir_texto = "<div><button id=\"teste_rota_excluir_texto\">Teste_de_Rota-excluir_texto</button></div>";
	
	// Sequência de testes:
	let but_teste_seq_1 = "<div><button id=\"but_teste_seq_1\">Sequência de Testes - 1</button></div>";
	
	// Fluxos:
	const html_teste_seq = 
		"<div class=\"rota\">\
			<div>Sequência de Testes:</div>\
			<textarea id=\"teste_seq-textarea\" rows=\"20\" cols=\"200\"></textarea>\
		</div>";
	
	//let but_teste_rota_# = "<div><button id=\"teste_rota_#\">Teste_de_Rota-#</button></div>";
	//const obj_but_teste_rota_# = document.getElementById("teste_rota_#");
	
	
	let botoes = 
	but_teste_rota_resetar_db+
	but_teste_rota_signup+
	but_teste_rota_login+
	html_teste_rota_fluxo+
	but_teste_rota_ler_fluxo+
	but_teste_rota_editar_fluxo+
	but_teste_rota_inserir_fluxo_filho+
	but_teste_rota_excluir_fluxo+
	but_teste_rota_inserir_texto+
	but_teste_rota_ler_texto+
	but_teste_rota_editar_texto+
	but_teste_rota_excluir_texto+
	but_teste_seq_1+
	html_teste_seq;
	

	
	insercao.innerHTML = botoes;
	
	console.log("Pós inserção: body.innerHTML ="+body.innerHTML); // Debug
	
	const contFluxo = () => { // Conteúdos do Fluxo
		let retorno = {
			id: parseInt(document.getElementById("tr_fluxo-id").value),
			paiId: parseInt(document.getElementById("tr_fluxo-paiId").value),
			titulo: document.getElementById("tr_fluxo-titulo").value,
			html: document.getElementById("tr_fluxo-html").value
		};	
		return retorno;
	};
	
	console.log("contFluxo().id ="+contFluxo().id); // Debug
	
	// DB:
	const obj_but_teste_rota_resetar_db = document.getElementById("teste_rota_resetar_db");	
	obj_but_teste_rota_resetar_db.addEventListener("click", teste_rota_resetar_db);
	//obj_but_teste_rota_resetar_db.addEventListener("click", efetuar_testes(teste_rota_resetar_db)); --> Não funcionou - estudar !
	
	// Users:
	const obj_but_teste_rota_signup = document.getElementById("teste_rota_signup");
	obj_but_teste_rota_signup.addEventListener("click", teste_rota_signup);
	const obj_but_teste_rota_login = document.getElementById("teste_rota_login");	
	obj_but_teste_rota_login.addEventListener("click", teste_rota_login);
	
	// Fluxos:
	const obj_but_tr_fluxo_testar = document.getElementById("tr_fluxo-testar");
	obj_but_tr_fluxo_testar.addEventListener("click", function() {
		const obj_tr_fluxo_select = document.getElementById("tr_fluxo-select");
		switch (obj_tr_fluxo_select.value) {
			case "inserir": {
				// Para inserir fluxo precisa de: NADA !, mas pode informar paiId, titulo e hmtl (todos opcionais) - Não aceita id !		
				teste_rota_inserir_fluxo(contFluxo().paiId, contFluxo().titulo, contFluxo().html);
				break;
			}
			case "ler": {
				// Para ler fluxo precisa de: id
				teste_rota_ler_fluxo(contFluxo().id);
				break;
			}
			case "editar": {
				// Para editar fluxo precisa de: id, paiId, titulo e hmtl
				teste_rota_editar_fluxo(contFluxo().id, contFluxo().paiId, contFluxo().titulo, contFluxo().html);
				break;
			}
			case "excluir": {
				// Para excluir fluxo precisa de: id
				teste_rota_excluir_fluxo(contFluxo().id);
				break;
			}
			default: {
				console.log("###Erro: - O conteúdo do <select id=\"tr_fluxo-select\"> é: "+obj_tr_fluxo_select.value+" o que não gera nenhuma ação !");
				break;
			}		
		}
	});
	const obj_but_teste_rota_ler_fluxo = document.getElementById("teste_rota_ler_fluxo");
	obj_but_teste_rota_ler_fluxo.addEventListener("click", teste_rota_ler_fluxo);
	const obj_but_teste_rota_editar_fluxo = document.getElementById("teste_rota_editar_fluxo");	
	obj_but_teste_rota_editar_fluxo.addEventListener("click", teste_rota_editar_fluxo);
	const obj_but_teste_rota_excluir_fluxo = document.getElementById("teste_rota_excluir_fluxo");	
	obj_but_teste_rota_excluir_fluxo.addEventListener("click", teste_rota_excluir_fluxo);
	
	const obj_but_teste_rota_inserir_fluxo_filho = document.getElementById("teste_rota_inserir_fluxo_filho");
	obj_but_teste_rota_inserir_fluxo_filho.addEventListener("click", teste_rota_inserir_fluxo_filho);
	
	// Textos:
	const obj_but_teste_rota_inserir_texto = document.getElementById("teste_rota_inserir_texto");
	obj_but_teste_rota_inserir_texto.addEventListener("click", teste_rota_inserir_texto);
	const obj_but_teste_rota_ler_texto = document.getElementById("teste_rota_ler_texto");
	obj_but_teste_rota_ler_texto.addEventListener("click", teste_rota_ler_texto);
	const obj_but_teste_rota_editar_texto = document.getElementById("teste_rota_editar_texto");	
	obj_but_teste_rota_editar_texto.addEventListener("click", teste_rota_editar_texto);
	const obj_but_teste_rota_excluir_texto = document.getElementById("teste_rota_excluir_texto");	
	obj_but_teste_rota_excluir_texto.addEventListener("click", teste_rota_excluir_texto);
	
	// Sequência de testes: 
	const obj_but_teste_seq_1 = document.getElementById("but_teste_seq_1");	
	obj_but_teste_seq_1.addEventListener("click", sequenciaTestes1);
	
	
	//export const obj_request = document.getElementById("request"); // Unexpected token 'export'
	/*const obj_request = document.getElementById("requisicao");
	const obj_response = document.getElementById("resposta");*/ // DELETAR
	
}

//const lista_teste_seq_1 = {
const lts_1 = [
	//["comentário", função, [array de argumentos]],
	["", teste_rota_resetar_db, []],
	["", teste_rota_signup, []],
	["", teste_rota_login, []],
	//["", teste_rota__fluxo, []],
	//export const teste_rota_inserir_fluxo = async (paiId, titulo, html) => {
	// Árvore de Fluxos:
	//										 1
	//										/ \
	//									 /   \
	//									2     3
	//								 / \   / \
	//								4   5 6   7
	//							 /     \
	//							/       \
	//						 8         9
	//						/|\
	//					 / | \
	//					10 11 12
	//
	["", teste_rota_inserir_fluxo, [null, "Título-1", "HTML-1\n\n\n"]],
	["", teste_rota_inserir_fluxo, [1, "Título-2", "HTML-2\n\n\n"]],
	["", teste_rota_inserir_fluxo, [1, "Título-3", "HTML-3\n\n\n"]],
	["", teste_rota_inserir_fluxo, [2, "Título-4", "HTML-4\n\n\n"]],
	["", teste_rota_inserir_fluxo, [2, "Título-5", "HTML-5\n\n\n"]],
	["", teste_rota_inserir_fluxo, [3, "Título-6", "HTML-6\n\n\n"]],
	["", teste_rota_inserir_fluxo, [3, "Título-7", "HTML-7\n\n\n"]],
	["", teste_rota_inserir_fluxo, [4, "Título-8", "HTML-8\n\n\n"]],
	["", teste_rota_inserir_fluxo, [5, "Título-9", "HTML-9\n\n\n"]],
	["", teste_rota_inserir_fluxo, [8, "Título-10", "HTML-10\n\n\n"]],
	["", teste_rota_inserir_fluxo, [8, "Título-11", "HTML-11\n\n\n"]],
	["", teste_rota_inserir_fluxo, [8, "Título-12", "HTML-12\n\n\n"]],
	
	["", teste_rota_ler_fluxo, [1]],
	["", teste_rota_editar_fluxo, [1]],
	["", teste_rota_excluir_fluxo, [12]],
];


function sequenciaTestes1() {
	
	const obj_teste_seq_textarea = document.getElementById("teste_seq-textarea");
	
	for (let i = 0; i < lts_1.length; i++) {	
		obj_teste_seq_textarea.insertAdjacentText("beforeend", "TESTE-"+lts_1[i][0]);
		console.log("lts_1["+i+"][1] ="+lts_1[i][1]); //Debug
		console.log("lts_1["+i+"][2] ="+lts_1[i][2]); //Debug
		const ret = lts_1[i][1](...lts_1[i][2]); // Roda o teste -- não chama as funções sincronicamente !
		setTimeout(console.log("ESPERANDO..."), 2000); // Espera 1s até executar a função acima... // Alternativa lenta e retrógada porém funcional no momento...
		/*const secondFunction = async () => {
		  const result = await firstFunction()
		  // do something else here after firstFunction completes
		}*/
		/*const ret = async () => { // Maneira de chamar as funções de forma síncrona
			console.log("Antes de: const result = await lts_1[i][1](...lts_1[i][2]);"); // Debug
			const result = await lts_1[i][1](...lts_1[i][2]); // Roda o teste
			console.log("result ="+result); // Debug
			return result;
		};*/ // Não está funcionando !!! -- não chama nada !
		
		//firstFunction(() => console.log('huzzah, I\'m done!'))
		//const ret = (() => lts_1[i][1](...lts_1[i][2])); // Roda o teste // Não chama nada também !!!

		
		
		obj_teste_seq_textarea.insertAdjacentText("beforeend", "RESULTADO: ");
		if (typeof ret.errors === "undefined") { 
			obj_teste_seq_textarea.insertAdjacentText("beforeend", "<div class=\"OK\">OK</div>");
		}
		else {
			obj_teste_seq_textarea.insertAdjacentText("beforeend", "<div class=\"erro\">###ERRO</div>");
		}
		obj_teste_seq_textarea.insertAdjacentText("beforeend", "<br>");
	}
}


/*function carregar_o_html_inicial() 1{
	console.log("Entrou em: function carregar_o_html_inicial()");
	
	fetch(servidor_frontend_teste+"/carregar_o_html_inicial") 
	  .then2(
	    function(response) 3{
	      if (response.status !== 200) {
	        console.log ('Parece que houve um problema. Código de Estado: '+response.status);
	        return;
				}
	
	      // Examine the text in the response
	      //response.json ().then (function (data) // desisti do json porque estava dando muito erro no acesso ao mesmo
	      response.text().then4(function(data) {
	        console.log ("data ="+data); // Debug	        
	       
				}
			)4}3;
		)2;
}1*/


function carregar_o_html_inicial() {
	console.log("Entrou em: function carregar_o_html_inicial()");
	
	fetch(servidor_frontend_teste+"/carregar_o_html_inicial") 
	  .then(function(response) {response.text().then(function(data) {console.log ("data ="+data)})});
} // Assim funcionou !!!



// Inicialização após carga da página:
window.onload = function(){
  console.log('Entrou em: window.onload = function()');
  inicializar_testes();
}


















/*function mudancaMp(mp_num, mp_id_db, ev) {
	console.log('Entrou em: mudancaMp('+mp_num+' | '+mp_id_db+')');
	
	// Precisa mandar para a página que responde os seguintes dados: (para recalcular 'consumo' e 'custo_total')
	// - 'quantidade' -- não precisa mandar rendimento porque este ainda não foi alterado (pega o valor dele da DB)
	var id = mp_id_db;
	var quantidade = mp_quantidade[mp_num].value;
	var rendimento = mp_rendimento[mp_num].value;
	fetch("./produto_respondedor.php?funcao=atualizaMp&id="+id+"&quantidade="+quantidade+"&rendimento="+rendimento) 
	  .then(
	    function(response) {
	      if (response.status !== 200) {
	        console.log ('Parece que houve um problema. Código de Estado: '+response.status);
	        return;
				}
	
	      // Examine the text in the response
	      //response.json ().then (function (data) // desisti do json porque estava dando muito erro no acesso ao mesmo
	      response.text().then(function(data) {
	        console.log ("data ="+data); // Debug	        
	        /*Vai receber exatamente isto:
	        * consumo¬0,059701492537313
						custo_total¬4,2292537313433
	        * 
	      	*/
					/*console.log ("data.charCodeAt("+(data.length)+") ="+data.charCodeAt(data.length)); // Debug // =NaN
					console.log ("data.charCodeAt("+(data.length -1)+") ="+data.charCodeAt(data.length -1)); // Debug // =10 // Parece que só tem 1 "\n"
					console.log ("data.charCodeAt("+(data.length -2)+") ="+data.charCodeAt(data.length -2)); // Debug // =95 
					console.log ("data.charCodeAt("+(data.length -3)+") ="+data.charCodeAt(data.length -3)+" - "+data.charAt (data.length -3)); // Debug
					console.log ("data.charCodeAt("+(data.length -4)+") ="+data.charCodeAt(data.length -4)+" - "+data.charAt (data.length -4)); // Debug*/
					
					// Parece que tem um "\n" a mais que está gerando uma linha extra: // Não tem não -- o erro é em outro lugar
					/*if ((data.charAt (length -1) == "\n") && (data.charAt (length -2) == "\n")) 
						{
						console.log ("Tinha um \\n a mais");
						data1 = data.substring(str.length -1, str.length);
						}
					else data1 = data;*/
					// Avalia se é uma mensagem de erro: (possui a string "###Erro:")
					/*if (data.search ("###Erro:") != -1) throw ''; // Recebeu na verdade uma mensagem de erro do respondedor - Pára a execução						
					
					var arr_linhas = data.split ("\n"); // Quando faz o split, considera que tem dados após o último "\n" e cria um array a mais para este dado fantasma...
					// Correção no respondedor - pedir para que ele ignore o último "\n" ao mandar os dados
					/*console.log ("arr_linhas[0] ="+arr_linhas[0]); // Debug
	        console.log ("arr_linhas[1] ="+arr_linhas[1]); // Debug
	        console.log ("arr_linhas.length ="+arr_linhas.length); // Debug*/
	        
	        /*var arr_data = []; 
	        for (c1 = 0; c1 != arr_linhas.length; c1++)	{
						console.log ("arr_linhas["+c1+"] ="+arr_linhas[c1]); // Debug
						if (arr_linhas[c1] === '') continue;
						arr_colunas = arr_linhas[c1].split ("¬");
						arr_data.push (arr_colunas);
					}*/
