// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 25/10/2023
// Objetivo: Protótipo de teste de rota

"use strict";

import {internet_backend} from "../../config.js";
import {mostrarRequisicaoResposta} from "../../MostrarRequisicaoResposta.js";

// Cria o teste para a rota '/#':
// Pré-requisitos:
// - 

export const teste_rota_# = async () => {
	console.log("Entrou em: export const teste_rota_# = async () =>");
  const ret = await teste();
  mostrarRequisicaoResposta(ret[0], JSON.stringify(ret[1]));
}

const teste = () => {
	console.log("Entrou em: function teste()");
  return new Promise(resolve => { 	
	
		let manut = {
			login: "manut",
			senha: "bhJL$29!",
		};
		
		const manut_str = JSON.stringify(manut);
		let data;
		let retorno = [];
		retorno[0] = manut_str;
		
		
		fetch(internet_backend+"/#", {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json;charset=utf-8'
		  },
		  body: manut_str
		}) 
		  //.then(function(response) {response.json().then(function(data) {console.log ("data ="+data)})});
		  .then(function(response) {response.json().then(function(data) {
				//console.log("data ="+JSON.stringify(data)); // Debug
				retorno[1] = data;
				resolve(retorno); // O 'resolve' deve estar dentro do corpo do fetch senão ele será executado antes que o fetch termine !
				})});
						
	})}
	  


/*const precisamosEsperar = () => {
   return new Promise(resolve => {
   setTimeout(function() {
      console.log("Espere meu resultado!")
      resolve(5)
    }, 1000)
  })
}

const outraFuncao = async () => {
  const x = await precisamosEsperar()
  
  console.log(x)
}
outraFuncao()*/
