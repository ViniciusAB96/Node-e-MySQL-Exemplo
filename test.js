//Não estou utilizando esse arquivo, ou seja o mesmo é apenas para estudo.



const Sequelize = require("sequelize");//chamando todo o módulo do sequelize que foi baixado e passando para a constante Sequelize
const sequelize = new Sequelize('test', 'root', '123456',{
    host:"localhost",
    dialect: "mysql"
});//instanciando o meu ORM (Sequelize) passando para isso o banco de dados que eu quero me conectar, o nome de usuário, a senha, o host e o tipo de banco de dados, no caso o mysql


//Criando um module de postagens no sequelize

const Postagem = sequelize.define('postagens',{//nome da tabela que será criada.
    titulo:{ //nome do campo
        type: Sequelize.STRING //o string tem um limite de caracteres
        //tipo do campo
    },
    conteudo:{ //nome do campo
        type: Sequelize.TEXT //um texto é ilimitado, ou seja eu consigo colocar quantos caracteres eu desejar.
        //tipo do campo.
    },

});
//Criando uma postagem.
/*
Postagem.create({
    titulo:"Um titulo qualquer",
    conteudo:"Um conteudo qualquer, sendo gerado pelo Sequelize... Oloco Bixo!!!"
})*/




// Nome no singular                 //recomendado que esse nome seja no plural.
const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
});

//Criando um usuario 
Usuario.create({
    nome: "Vinícius",
    sobrenome: "Barros",
    idade: 22,
    email:"viniciusdeandrade96@gmail.com"
});


//Postagem.sync({force:true}); //essa função irá sincronizar o meu objeto Postagem com o MYSQL, com o force:true eu tenho certeza que a tabela será gerada.

//Usuario.sync({force:true});//Caso eu não comente ou delete o sync ele irá recriar a tabela













sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso ao banco de dados.");
}).catch(function(erro){
    console.log("Não foi possível autenticar no banco de dados. Erro: " + erro);
});//essa função verifica se a conexão com o banco de dados foi feita corretamente.
/**
 * Essa função then e o catch, é tipo do try, catch do C#.
 */

 /**
  * A função then é como se fosse uma função de callback, ou seja ela será executanda quando algum evento acontece.
  * No caso, a sequelize.authenticate só pode apresentar autenticado ou falha, caso o retorno for sucesso, ele vai executar a função
  * do then, caso haja algum erro, ele irá executar a função do catch.
  */