const db = require('./Db'); // eu coloco sempre o ponto barra para dizer que o arquivo está na mesma página do meu Post.js

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

//para acessar o meu módule Post através de outros arquivos eu tenho que utilizar o module.export

module.exports = Post;

/*Post.sync({force:true}) somente executar esse comando de syc apenas uma vez, caso contrário ele irá apagar a tabela Post e irá
    criá-la novamente.
*/