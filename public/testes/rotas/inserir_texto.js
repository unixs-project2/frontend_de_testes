// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 29/10/2023
// Objetivo: 

"use strict";

import {internet_backend} from "../../config.js";
import {mostrarRequisicaoResposta} from "../../MostrarRequisicaoResposta.js";
import {token_obj} from "../../front_teste.js";

// Cria o teste para a rota '/inserir_texto':
// Pré-requisitos:
// - 

export const teste_rota_inserir_texto = async () => {
	console.log("Entrou em: export const teste_rota_inserir_texto = async () =>");
  const ret = await teste();
  mostrarRequisicaoResposta(ret[0], JSON.stringify(ret[1]));
}

const teste = () => {
	console.log("Entrou em: function teste()");
  return new Promise(resolve => { 	
	
		let texto = {
			authorization: token_obj.recuperarToken(),
			fluxoId: 1,
			hmtl: "<p>Este é um parágrafo de teste.</p>",
		};
		
		const texto_str = JSON.stringify(texto);
		let data;
		let retorno = [];
		retorno[0] = texto_str;
		
		
		fetch(internet_backend+"/inserir_texto", {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json;charset=utf-8'
		  },
		  body: texto_str
		}) 
		  .then(function(response) {response.json().then(function(data) {
				//console.log("data ="+JSON.stringify(data)); // Debug
				retorno[1] = data;
				resolve(retorno); // O 'resolve' deve estar dentro do corpo do fetch senão ele será executado antes que o fetch termine !
				})});
						
	})}
	  
