// Projeto: UniXs - Gestão do Conhecimento
// Programador: Paulo Griebler Júnior
// Data de início: 20/10/2023
// Objetivo:

// Rodar com: 
// 1° Mudar o JS para uma versão mais atual:
// nvm use 18.17
// 2° Chamar o servidor:
// npm run dev --> inicializa chamando o que está descrito em 'package.json' como 'main': --> "main": "front_teste_servidor_com_express.js", --> que é este arquivo aqui
// Visualizar resultado em: http://192.168.1.20:5000 --> OK porta 5000 aberta no ufw OU
// Visualizar resultado em: http://168.0.126.147:65000 --> OK porta 65000 aberta roteador que encaminha para a 5000 no servidor astrolabium

// Código baseado em: https://expressjs.com/pt-br/guide/routing.html

var express = require('express');
var app = express();
var ip = "http://192.168.1.20"
var porta = 5000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  //res.send('hello world');
  let ini = inicializar();
  console.log("Return da função: inicializar():\n"+ini);
  res.send(ini);
  
});

//app.use(express.static('/')); // Não funcionou usando o diretório raiz -- tive que mover os arquivos CSS, imagens e JS para '/public' conforme descrito abaixo
app.use(express.static('public')); // Usado para entregar arquivos 'estáticos' localizados no diretório "/" -- arquivos CSS, imagens e JS


app.listen(porta, () => {
  //console.log("Frontend_de_teste rodando no IP: ${ip} na porta ${porta}");
  console.log(`Frontend_de_teste rodando no IP: ${ip} na porta ${porta}`); // Precisa usar "`" (backticks) para que substitua ${} pela variável que estiver dentro do {}
})

//O Express suporta os seguintes métodos de roteamento que correspondem aos métodos HTTP: get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, e connect.


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
