// window.onload=function(){
// 	listar();
// 	document.getElementById('formulario').addEventListener('submit', adicionarOuAlterar);
// 	document.getElementById('formulario').addEventListener('submit', listar);
// }

// const idAlterar = null;

// function adicionarOuAlterar(e){
// 	const nom = document.getElementById('campo-nome').value;
// 	const p = {
//         nome : !nom ? "sem nome": nom, //mesmo que if(nom = ""){ nom = "sem nome";}
//         idade : document.getElementById('campo-idade'),
//         email : document.getElementById('campo-email')
// 	}

// 	if(idAlterar == null)	
// 		adicionar(p);
// 	else if(idAlterar > 0)
// 		alterar(p);
// 	else
// 		alert("Ação desconhecida");	
	
// 	//bloqueia a ação de atualização do browser
// 	e.preventDefault();
// }

// function adicionar(p){	
// 	const pessoas = [];	
// 	const idValido = 1;	
// 	//se já possuir o localStorage, adiciono no array	
// 	if(localStorage.getItem('value') !== null ){
// 		pessoas = JSON.parse(localStorage.getItem('value')); //captura o array de objetos(JSON);
				
// 		if(pessoas.length > 0)
// 			idValido = 	(function obterIdValido() {	//Função Auto-executável
// 							 //percorre verificando se tiver "buraco" entre os numeros
// 							for(const i = 0; i < pessoas.length; i++)
// 								if(pessoas[i].Id != i+1)
// 									return i + 1;							
// 							//se nao achar, retorna o id posterior da ultima pessoa
// 							return pessoas[pessoas.length - 1].Id + 1;
// 						})();
//     }	
//     const pessoa = {
// 		Id: idValido,
//         Nome: p.nome,
//         Idade : p.idade,
//         Email : p.email
// 	};
	
// 	//Adiciona o objeto ao ultimo indice do array
// 	pessoas.push(pessoa);	
// 	//Ordeno o array pelo ID do objeto
// 	pessoas.sort(function(a,b) {
// 		return a.Id - b.Id;
// 	});			
// 	//armazena no Localstorage
// 	localStorage.setItem('value', JSON.stringify(pessoas));	
// 	//reseta os campos do formulario
// 	document.getElementsByClassName('formulario').reset();	
// }

// function alterar(p){
// 	const btn = document.getElementsByClassName('btn-adicionar');	

// 	pessoas = JSON.parse(localStorage.getItem('value'));
// 	//substituir as informaçoes
// 	for(const i = 0; i < pessoas.length; i++){
// 		if(pessoas[i].Id == idAlterar){
// 			pessoas[i].Nome = p.nome;
//             pessoas[i].Idade = p.idade;
//             pessoas[i].Email = p.email;
			
// 			btn.value = "adicionar";
// 			idAlterar = null;

// 			localStorage.setItem('value', JSON.stringify(pessoas));	
//             document.getElementsByClassName('formulario').reset();		
// 			break;
// 		}
// 	}
// }

// //função do botao Alterar
// function prepararAlterar(idRow){	
// 	document.getElementsByClassName('btn-adicionar').value = "adicionar";
	
//     const in1 = document.getElementById('in-1'),
//         in2 = document.getElementById('in-2'),
//         in3 = document.getElementById('in-3');

// 	const pessoas = JSON.parse(localStorage.getItem('value'));
// 	for(const i = 0; i < pessoas.length; i++){
// 		if(pessoas[i].Id == idRow){			
// 			//popular os campos
//             in1.value = pessoas[i].Nome;
//             in2.value = pessoas[i].Idade;
//             in3.value = pessoas[i].Email;
			
// 			//recarrega a lista para limpar o th com background alterado
// 			listar();
// 			//coloco ID null (caso clicar em varios botao alterar)
// 			idAlterar = null;
// 			if(idAlterar === null){
// 				//mudar o background da nova linha
// 				const th = document.getElementsByClassName("rowTable"+i);				
// 				th.className = "estadoAlteracao";				
// 			}

// 			//atribuir o Id a variavel global
// 			idAlterar = pessoas[i].Id;
// 			break;
// 		}
// 	}
// }

// function excluir(cod){
// 	const pessoas = JSON.parse(localStorage.getItem('value'));

// 	for(const i = 0; i < pessoas.length; i++)
// 		if(pessoas[i].Id == cod)
// 			pessoas.splice(i, 1);
				
	
// 	localStorage.setItem('value', JSON.stringify(pessoas));
// 	listar();
	
// 	//se nao possuir mais nenhum registro, limpar o storage
// 	if(pessoas.length == 0)
// 		window.localStorage.removeItem("value");
// }

// function listar(){
// 	//se nao possuir nenhum local storage, nao fazer nada
// 	if(localStorage.getItem('value') === null)
// 		return;
	
// 	//captura os objetos de volta
// 	var pessoas = JSON.parse(localStorage.getItem('value'));
// 	var tbody = document.getElementsByClassName("tbody-resultados");

// 	//limpar o body toda vez que atualizar
// 	// tbody.innerHTML = '';
	
// 	for(var i = 0; i < pessoas.length; i++){
// 		var	id = pessoas[i].Id,
// 		    nome = pessoas[i].Nome,
//             idade = pessoas[i].Idade,
//             email = pessoas[i].Email;
			       
// 		tbody.innerHTML += '<tr id="rowTable'+i+'">'+
// 								'<td>'+id+'</td>'+
// 								'<td>'+nome+'</td>'+
// 								'<td>'+idade+'</td>'+
// 								'<td>'+email+'</td>'+
// 								'<td><button onclick="excluir(\'' + id + '\')">Excluir</button></td>'+
// 								'<td><button onclick="prepararAlterar(\'' + id + '\')">Alterar</button></td>'+
// 						   '</tr>';		
// 	}
// }
// 							//'<td class="celTable'+i+'">'+id+'</td>'+


function Login(){
    let done = 0;
    let nome = document.getElementsByName('nome')[0].value;
    let senha = document.getElementsByName('senha')[0].value;

    if (nome=="admin" && senha=="admin123") {
        window.location="../html/crud.html"; 
        done=1
        alert("Bem-vindo " + nome);
    } 
    
    if (nome=="root" && senha=="root123") {
        window.location="../html/crud.html"; 
        done=1;
        alert("Bem-vindo " + nome);
    }

    if (nome=="user" && senha=="user123") {
        window.location="../html/crud.html";
        done=1;
        alert("Bem-vindo " + nome);
    }

    if (done==0) {
        alert("Senha ou Usuário inválido."); 
    }
}

