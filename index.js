const express = require("express");
const handlebars = require("express-handlebars");
const Post = require("./models/Post"); //chamando o meu módulo de post
const bodyparser = require("body-parser");
const app = express();





//Há vários template engine, ou seja eu tenho que dizer para o express qual o template engine que eu quero utilizar.
//config 
    //template engine
        app.engine('handlebars', handlebars({defaultLayout:'main'})); //o main é o template padrão da aplicação.
        app.set('view engine', 'handlebars')
        //Na raiz do projeto eu tenho que criar uma pasta com o nome views e dentro da mesma outra com o nome layouts
    //body-parser --utilizado para pegar os dados enviados via post pelo meu formulário.
        app.use(bodyparser.urlencoded({extended:false}));
        app.use(bodyparser.json());


 
//Rota
    app.get("/", function(req, res){
        Post.all({order:[['id','desc']]}).then(function(posts){//all --> irá retornar todos os posts que existem dentro da minha tabela POST.
            //como eu tenho que passar todos os dados para a minha View eu tenho que utilizar o then.
            //no parâmetro then, o then irá receber todos os posts na variável post.


            //Sempre que eu utilizar o .all o que eu vou receber é um array de objetos (no caso posts)

            console.log(posts);

            res.render('home', {post: posts});//por meio das chaves, eu consigo passar qualquer tipo de dado para o meu front-end, no caso o meu handlebars
        });
        
    });

    app.get("/cad", function(req, res){
        res.render('formulario'); //estou falando para o express exibir o arquivo formulario.handlebars, contudo eu não necessito colocar nem a extenção e nem definir o main (layout principal), esse já foi definido acima.
    });

    app.post("/add", function(req, res){ //sempre que eu alterar a minha rota, eu necessito alterar o tipo da minha rota.
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
            }).then(function(){
                res.redirect('/'); //estou me redirecionando para a minha rota principal, no caso a /, olhe acime na outra rota.
                // res.send('O Post foi cadastrado com sucesso');
             }).catch(function(erro){
                    res.send('Houve um erro:  '+ erro);
                });      
        //res.send("Texto: " + req.body.titulo + " Conteudo: "+ req.body.conteudo)
    });// as rotas do tipo post eu não consigo acessar via URL.



    app.get('/deletar/:id', function(req, res){
        Post.destroy({where:{'id':req.params.id}}).then(function(){//se houver um recurso dentro da minha tabela Posts que tenha um id igual ao id que eu estou passando pelos parametros, ele irá deletar.
            res.send('Post deletado com sucesso!');
        
        }).catch(function(erro){
            res.send('O seguinte erro ocorreu: ' + erro);
        });
    });


    app.listen(8091, function(){
        console.log("Servidor rodando na url: http://localhost:8091");
    }); 