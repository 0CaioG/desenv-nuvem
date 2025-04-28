const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express

let clientes = [];
//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
})

//rota do cadastro de produtos
app.get("/clientes", function(req,res){
    res.write("<h1>Lista de Clientes!</h1>");
    for(let i = 0; i < clientes.length;i++){
        res.write("<li>"+clientes[i]+" ----- id: "+i+"</li>");
    }
    
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    let idcli = req.params.parametro;
    res.send("<h1>Cliente: " + clientes[idcli]+"</h1>");
})

//rota com parametro opcional
app.get("/cadastro/:nome", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        clientes.push(nome)
        res.send("<h1>Cliente " + nome + " cadastrado!</h1>");
    }else{
        res.send("cliente não cadastrado, não existe parametro!");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicaÃ§Ã£o na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
