// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 20/10/2023
// Objetivo:

// Rodar com: 
// 1° Mudar o JS para uma versão mais atual:
// nvm use 18.17
// 2° Chamar o servidor:
// node front_teste_servidor.js
// Visualizar resultado em: http://192.168.1.20:5000 --> OK porta 5000 aberta no ufw

// OBS.: Este código é baseado no "helloworld" do Node.js --- https://nodejs.dev/pt/learn/introduction-to-nodejs/ ---> Isso aqui não está usando o framework 'express'

const http = require('http'); // Precisa retirar as informações daqui --- https://nodejs.org/api/http.html
 
const hostname = '192.168.1.20';
const port = 5000;
 
const server = http.createServer((req, res) => {
	// Mostra o que foi pedido no 'request':
	console.log("req.header ="+req.header); // Debug
	console.log("req.body ="+req.body); // Debug
	
	
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.end(inicializar());
  //let ini = inicializar(); // O que está acontecendo aqui sendo o log: - O fluxo de execução principal está seguindo sem esperar o retorno da chamada da função 'inicializa()'. Por isso o retorno está sempre sendo 'undefined'.
	let ini = inicializar();
  console.log("Return da função: inicializar():\n"+ini);
  //res.end(ini); // Mandar o HTML como resposta não vai alterar todo o HTML da página, apenas vai inserir o texto no <body>
  //res.end(teste());
  // A solução seria usar o DOM, porém no node não se tem DOM para alterar !!!
  
  
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("Esta porta está sendo encaminhada o roteador Archer C5 no http://168.0.126.147:65000");
});


/*//
function teste() {
	console.log("Entrei na função teste sem ter sido chamada...");
	
	return "funcionou!";
}*/

// Lê as configurações de HTML para a página de início no arquivo 'inicio.html' e manda como resposta para o request
//function inicializar() {
function inicializar() {
	console.log("Entrou em: function inicializar()");
	
	const fs = require('fs');
	let retorno; // Retorno desta função
	
	// Esta é uma chamada assíncrona. O V8 não vai esperar até que readFile() leia todo o arquivo. Vai seguir adiante a execução. Por isso que o retorno da função inicializar() está sendo nulo.
	// Solução1: colocar a chamada a readFile() como um parâmetro da função inicializar().
	// Solução2: usar a versão síncrona de readFile:
	//var text = fs.readFileSync('test.md','utf8') --> Optei por essa hoje !
	/*fs.readFile('./front_teste.html', 'utf8', (err, data) => {
	  if (err) {
			let erro = "###Erro: -"+err;
	    console.error(erro);
	    //return; // O return deve estar no corpo prinicipal da função não dentro de uma subfunção que foi chamada por ela, senão não repassa o return
	    retorno = erro;
	  }	  
	  console.log("Dados lidos:\n"+data);
	  //return data; // O return deve estar no corpo prinicipal da função não dentro de uma subfunção que foi chamada por ela, senão não repassa o return
	  //retorno = data;
	  this.retorno = data;
	});*/
	
	retorno = fs.readFileSync('./front_teste.html','utf8');
	
	console.log("retorno ="+retorno);
	return retorno;

}
