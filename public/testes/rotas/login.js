// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 25/10/2023
// Objetivo: 

"use strict";

import {internet_backend} from "../../config.js";
import {mostrarRequisicaoResposta} from "../../MostrarRequisicaoResposta.js";
import {token_obj} from "../../front_teste.js";

// Cria o teste para a rota '/login':
// Pré-requisitos:
// - 

export const teste_rota_login = async () => {
	console.log("Entrou em: export const teste_rota_login = async () =>");
  const ret = await teste()
  mostrarRequisicaoResposta(ret[0], JSON.stringify(ret[1]));
  //Token.salvarToken(JSON.parse(ret[1]).token); // SyntaxError: "[object Object]" is not valid JSON
	let token = ret[1].token;
	console.log("token ="+token);
  token_obj.salvarToken(ret[1].token);
  let token_salvo = token_obj.recuperarToken();
  console.log("token_salvo ="+token_salvo);
  return ret[1]; // Para avaliar se houve um erro !
}

const teste = () => {
	console.log("Entrou em: function teste()");
  return new Promise(resolve => { 	
	
			
		let user = {
			email: "griebler.p@gmail.com",
			password: "G12345",
		};
		
		const user_str = JSON.stringify(user);
		let data;
		let retorno = [];
		retorno[0] = user_str;
		
		
		fetch(internet_backend+"/login", {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json;charset=utf-8'
		  },
		  body: user_str
		}) 
		  .then(function(response) {response.json().then(function(data) {
				//console.log("data ="+JSON.stringify(data)); // Debug
				retorno[1] = data;
				resolve(retorno); // O 'resolve' deve estar dentro do corpo do fetch senão ele será executado antes que o fetch termine !
				})});
						
	})}
