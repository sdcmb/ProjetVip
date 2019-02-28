let model = require("../models/vip.js");
let async = require("async");

/////////////////////////// A R T I C L E S    D E S     S T A R S

module.exports.articles =function(request, response){
  response.title = 'Articles des stars';

  async.parallel ([
    function (callback){
      model.listeVipNomPrenom(function(err, result){callback(null,result)});
    }
  ],
    function(err,result){

      if (err) {
        console.log(err);
        return;
      }
      response.vipNomPrenom = result[0];

      response.render('articlesMain', response);
    }
  );
}

module.exports.articleVip =function(request, response){
  response.title = 'Répertoire des stars';
  let numeroVip=request.params.numeroVip;

  async.parallel ([
    function (callback){
      model.afficherArticleVip(numeroVip,function(err, result){callback(null,result)});
    },
    function (callback){
      model.listeVipNomPrenom(function(err, result){callback(null,result)});
    }

  ],
    function(err,result){

      if (err) {
        console.log(err);
        return;
      }
      response.article = result[0];
      response.vipNomPrenom = result[1];


      response.render('articleVip', response);
    }
  );
}
