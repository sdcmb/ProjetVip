let model = require("../models/vip.js");
let async = require("async");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = 	function(request, response){
   response.title = 'Répertoire des stars';

   model.premiereLettre(function(err, result){
       if (err) {
           console.log(err);
           return;
       }

      response.lettres = result;
      response.render('repertoireVips', response);
  });
}

module.exports.listePersonnePremiereLettre =function(request, response){
  response.title = 'Répertoire des stars';
  let lettre=request.params.lettre;

  async.parallel ([
    function (callback){
      model.premiereLettre(function(err, result){callback(null,result)});
    },
    function (callback){
      model.afficheListePersonnePremiereLettre(lettre,function(err, result){callback(null,result)});
    }
  ],
    function(err,result){

      if (err) {
        console.log(err);
        return;
      }
      response.lettres = result[0];
      response.listeVip = result[1];

      response.render('listeVip', response);
    }
  );
}

module.exports.afficheBioVip =function(request, response){
  response.title = 'Biographie';
  let numeroVip=request.params.numeroVip;

  async.parallel([
    function (callback){
      model.premiereLettre(function(err, result){callback(null,result)});
    },
    function (callback){
      model.photos(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheInfosPrincipales(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheDescription(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheActeur(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheActeurFilm(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheRealisateur(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheMannequin(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheMannequinDefile(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheMariageVip(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheMariageVipV2(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheLiaisonVip(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheLiaisonVipV2(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheCouturier(numeroVip,function(err, result){callback(null,result)});
    },
    function(callback){
      model.afficheChanteur(numeroVip,function(err, result){callback(null,result)});
    }

  ],
    function(err,result){
      if(err){
        console.log(err);
        return;
      }
      response.lettres = result[0];
      response.photo = result[1];
      response.bioVip = result[2][0];
      response.descVip = result[3];
      response.acteurVip = result[4];
      response.acteurVipFilm = result[5];
      response.realisateurVip = result[6];
      response.mannequinVip = result[7];
      response.mannequinVipDefile = result[8];
      response.mariagesVip = result[9];
      response.mariagesVipV2 = result[10];
      response.liaisonsVip = result[11];
      response.liaisonsVipV2 = result[12];
      response.couturierVip = result[13];
      response.chanteurVip = result[14];

      response.render('bioVip', response);
    }
  );
}
