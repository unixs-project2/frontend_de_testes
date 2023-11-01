// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 25/10/2023
// Objetivo: 

"use strict";

export function mostrarRequisicaoResposta(requisicao, resposta) {
	console.log("Entrou em: function mostrarRequisicaoResposta(requisicao, resposta)");

	const obj_requisicao = document.getElementById("requisicao");
	const obj_resposta = document.getElementById("resposta");

	obj_requisicao.innerHTML = requisicao;
	obj_resposta.innerHTML = resposta;

}
