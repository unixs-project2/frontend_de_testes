// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 27/10/2023
// Objetivo: 

"use strict";

export class Token {
	token = "###";

	salvarToken(token) {
		console.log("Entrou em: function salvarToken(token");
	
		this.token = token;
	}
	
	recuperarToken() {
		console.log("Entrou em: function recuperarToken()");
		
		return this.token;		
	}
}
