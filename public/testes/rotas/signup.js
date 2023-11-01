// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 25/10/2023
// Objetivo: 

"use strict";

import {internet_backend} from "../../config.js";
import {mostrarRequisicaoResposta} from "../../MostrarRequisicaoResposta.js";

// Cria o teste para a rota '/signup':
// Pré-requisitos:
// - 

export const teste_rota_signup = async () => {
	console.log("Entrou em: export const teste_rota_signup = async () =>");
  const ret = await teste()
  mostrarRequisicaoResposta(ret[0], JSON.stringify(ret[1]));
  return ret[1]; // Para avaliar se houve um erro !
}

const teste = () => {
	console.log("Entrou em: function teste()");
  return new Promise(resolve => { 	
	
			
		let user = {
			name: "Paulo Griebler Júnior",
			email: "griebler.p@gmail.com",
			password: "G12345",
			passwordConfirmation: "G12345"
		};
		
		const user_str = JSON.stringify(user);
		let data;
		let retorno = [];
		retorno[0] = user_str;
		
		
		fetch(internet_backend+"/signup", {
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
