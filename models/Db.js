const Sequelize = require("sequelize");//chamando todo o módulo do sequelize que foi baixado e passando para a constante Sequelize

//Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', '123456',{ //mudei o meu banco de dados. Lembrar de mudar aqui também.
    host:"localhost",
    dialect: "mysql"
});/*instanciando o meu ORM (Sequelize) passando para isso o banco de dados que eu quero me conectar, o nome de usuário, a senha,
     o host e o tipo de banco de dados, no caso o mysql*/

/*Para poder acessar o banco de dados, eu preciso exportar tanto o Sequelize como o sequelize, sendo que para isso, 
    eu vou usar o module.exports*/

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }
    //eu preciso fazer isso pois cada Module irá ficar dentro de um arquivo específico.