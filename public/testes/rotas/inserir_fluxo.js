// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 27/10/2023
// Objetivo: 

"use strict";

import {internet_backend} from "../../config.js";
import {mostrarRequisicaoResposta} from "../../MostrarRequisicaoResposta.js";
import {token_obj} from "../../front_teste.js";

// Cria o teste para a rota '/inserir_fluxo':
// Pré-requisitos:
// - 

// O que é necessário informar para inserir um fluxo ?
// - id --> determinada pela API -- autoincrement !
// - paiId --> facultativo
// - tiutlo --> facultativo
// - html --> facultativo

export const teste_rota_inserir_fluxo = async (paiId, titulo, html) => {
//export async teste_rota_inserir_fluxo(paiId, titulo, html) { // Uncaught SyntaxError: Unexpected token 'async' 
//export teste_rota_inserir_fluxo(paiId, titulo, html) {
	console.log("Entrou em: export const teste_rota_inserir_fluxo = async () =>");
	//const teste_rota_inserir_fluxo = async (paiId, titulo, html) => {
	//const ret = await teste();
  const ret = await teste(paiId, titulo, html);
  mostrarRequisicaoResposta(ret[0], JSON.stringify(ret[1]));
  return ret[1]; // Para avaliar se houve um erro !
}

const teste = (paiId, titulo, html) => {
//const teste(paiId, titulo, html){ // Uncaught SyntaxError: Missing initializer in const declaration
	console.log("Entrou em: function teste()");
  return new Promise(resolve => { 	
		
		// Transforma os parâmetros em 'null' caso eles estejam 'undefined':
		if (titulo === undefined) titulo = null;
		if (paiId === undefined) paiId = null;
		if (html === undefined) html = null;
	
		let fluxo = {
			authorization: token_obj.recuperarToken(),
			titulo: titulo,
			paiId: paiId,
			html: html,
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
	  
