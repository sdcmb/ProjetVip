let HomeController = require('./../controllers/HomeController');
let VipController = require('./../controllers/VipController');
let AlbumController = require('./../controllers/AlbumController');
let ArticleController = require('./../controllers/ArticleController')
let TestController = require('./../controllers/TestController');



// Routes
module.exports = function(app){

  // tests à supprimer
    app.get('/test', TestController.Test);

// Main Routes
    app.get('/', HomeController.Index);
    app.get('/accueil', HomeController.Index);

// VIP
    app.get('/repertoire', VipController.Repertoire);
    app.get('/repertoire/:lettre', VipController.listePersonnePremiereLettre);
    app.get('/repertoire/vip/:numeroVip', VipController.afficheBioVip);

 // albums
   app.get('/album', AlbumController.ListerAlbum);

 // articles
    app.get('/articles', ArticleController.articles);
    app.get('/articles/:numeroVip', ArticleController.articleVip);

// tout le reste
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);

};
