// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 27/10/2023
// Objetivo: 

"use strict";

import {internet_backend} from "../../config.js";
import {mostrarRequisicaoResposta} from "../../MostrarRequisicaoResposta.js";
import {token_obj} from "../../front_teste.js";

// Cria o teste para a rota '/inserir_fluxo_filho':
// Pré-requisitos:
// - 

export const teste_rota_inserir_fluxo_filho = async () => {
	console.log("Entrou em: export const teste_rota_inserir_fluxo_filho = async () =>");
  const ret = await teste();
  mostrarRequisicaoResposta(ret[0], JSON.stringify(ret[1]));
}

const teste = () => {
	console.log("Entrou em: function teste()");
  return new Promise(resolve => { 	
	
		let fluxo = {
			authorization: token_obj.recuperarToken(),
			titulo: "Título_do_Fluxo_Filho",
			paiId: 1,
		};
		
		const fluxo_str = JSON.stringify(fluxo);
		let data;
		let retorno = [];
		retorno[0] = fluxo_str;
		
		
		fetch(internet_backend+"/inserir_fluxo", {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json;charset=utf-8'
		  },
		  body: fluxo_str
		}) 
		  .then(function(response) {response.json().then(function(data) {
				//console.log("data ="+JSON.stringify(data)); // Debug
				retorno[1] = data;
				resolve(retorno); // O 'resolve' deve estar dentro do corpo do fetch senão ele será executado antes que o fetch termine !
				})});
						
	})}
	  
