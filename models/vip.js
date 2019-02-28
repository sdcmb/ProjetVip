let db = require('../configDb');


module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT COUNT(*) AS NB FROM vip ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
                          ///////////////////////// R E P E R T O I R E  V I P \\\\\\\\\\\\\\\\\\\\\\\

module.exports.premiereLettre = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT SUBSTR(VIP_NOM, 1, 1) as lettre FROM vip ORDER BY 1;";
                          // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheListePersonnePremiereLettre = function(lettre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO as numeroVip, VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE, v.VIP_NUMERO as numVip FROM vip v JOIN photo p ON ";
                sql = sql + "v.VIP_NUMERO=p.VIP_NUMERO WHERE VIP_NOM LIKE '" +lettre+ "%' AND PHOTO_NUMERO=1;";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheInfosPrincipales = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "select  VIP_NOM as vipNom, VIP_PRENOM as vipPrenom, VIP_NAISSANCE as vipNaissance, NATIONALITE_NOM as vipNationalite from vip v join nationalite n on v.NATIONALITE_NUMERO=n.NATIONALITE_NUMERO join photo p on v.VIP_NUMERO=p.VIP_NUMERO where v.VIP_NUMERO="+numeroVip+";";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.photos = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT PHOTO_ADRESSE, PHOTO_NUMERO, PHOTO_SUJET, PHOTO_COMMENTAIRE FROM photo WHERE VIP_NUMERO=" +numeroVip+ ";";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheDescription = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_TEXTE FROM vip WHERE VIP_NUMERO="+numeroVip+";";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheActeurFilm = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT j.VIP_NUMERO, FILM_TITRE, FILM_DATEREALISATION ,r.VIP_NUMERO as realNum, v.VIP_NOM, v.VIP_PRENOM FROM acteur a "
                sql = sql + "JOIN joue j ON a.VIP_NUMERO=j.VIP_NUMERO JOIN film f ON j.FILM_NUMERO=f.FILM_NUMERO LEFT JOIN realisateur r "
                sql = sql + "ON f.VIP_NUMERO=r.VIP_NUMERO LEFT JOIN vip v ON r.VIP_NUMERO=v.VIP_NUMERO WHERE j.VIP_NUMERO="+numeroVip+";";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheActeur = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT a.VIP_NUMERO, VIP_SEXE FROM acteur a JOIN vip v ON v.VIP_NUMERO=a.VIP_NUMERO WHERE a.VIP_NUMERO="+numeroVip+";";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheRealisateur = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT r.VIP_NUMERO, FILM_TITRE, FILM_DATEREALISATION, VIP_SEXE FROM realisateur r LEFT JOIN film f ON r.VIP_NUMERO=f.VIP_NUMERO JOIN vip v ON r.VIP_NUMERO=v.VIP_NUMERO WHERE r.VIP_NUMERO="+numeroVip+";";
                        //  console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheMannequin = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT m.VIP_NUMERO, VIP_SEXE FROM mannequin m JOIN vip v ON v.VIP_NUMERO=m.VIP_NUMERO WHERE m.VIP_NUMERO="+numeroVip+";";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheMannequinDefile = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT dd.VIP_NUMERO, DEFILE_LIEU, DEFILE_DATE ,c.VIP_NUMERO coutNum, v.VIP_NOM, v.VIP_PRENOM FROM mannequin m ";
                sql = sql + "JOIN defiledans dd ON m.VIP_NUMERO=dd.VIP_NUMERO JOIN defile d ON dd.DEFILE_NUMERO=d.DEFILE_NUMERO ";
                sql = sql + "LEFT JOIN couturier c ON d.VIP_NUMERO=c.VIP_NUMERO LEFT JOIN vip v ON c.VIP_NUMERO=v.VIP_NUMERO WHERE dd.VIP_NUMERO="+numeroVip+";";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheMariageVip = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_VIP_NUMERO, VIP_NOM, VIP_PRENOM, DATE_EVENEMENT, MARIAGE_FIN, MARIAGE_LIEU, MARIAGE_MOTIFFIN FROM mariage m JOIN vip v ON ";
            sql = sql + "m.VIP_VIP_NUMERO=v.VIP_NUMERO WHERE m.VIP_NUMERO="+numeroVip+";";
                    //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheMariageVipV2 = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT m.VIP_NUMERO, VIP_NOM, VIP_PRENOM, DATE_EVENEMENT, MARIAGE_LIEU, MARIAGE_FIN, MARIAGE_MOTIFFIN FROM mariage m JOIN vip v ON ";
            sql = sql + "m.VIP_NUMERO=v.VIP_NUMERO WHERE m.VIP_VIP_NUMERO="+numeroVip+";";
                    //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheLiaisonVip = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_VIP_NUMERO, VIP_NOM, VIP_PRENOM, DATE_EVENEMENT, LIAISON_MOTIFFIN FROM liaison l JOIN vip v ON ";
            sql = sql + "l.VIP_VIP_NUMERO=v.VIP_NUMERO WHERE l.VIP_NUMERO="+numeroVip+";";
                    //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheLiaisonVipV2 = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT l.VIP_NUMERO, VIP_NOM, VIP_PRENOM, DATE_EVENEMENT, LIAISON_MOTIFFIN FROM liaison l JOIN vip v ON ";
            sql = sql + "l.VIP_NUMERO=v.VIP_NUMERO WHERE l.VIP_VIP_NUMERO="+numeroVip+";";
                    console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheCouturier = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT c.VIP_NUMERO, DEFILE_LIEU, DEFILE_DATE, VIP_SEXE FROM couturier c LEFT JOIN defile d ON c.VIP_NUMERO=d.VIP_NUMERO JOIN vip v ON c.VIP_NUMERO=v.VIP_NUMERO WHERE c.VIP_NUMERO="+numeroVip+";";
                      //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.afficheChanteur = function(numeroVip,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT c.VIP_NUMERO, ALBUM_TITRE, ALBUM_DATE, CHANTEUR_SPECIALITE, MAISONDISQUE_NOM FROM chanteur c JOIN composer co ON ";
                sql = sql + "c.VIP_NUMERO=co.VIP_NUMERO JOIN album a ON co.ALBUM_NUMERO=a.ALBUM_NUMERO JOIN maisondisque m ON ";
                sql = sql + "a.MAISONDISQUE_NUMERO=m.MAISONDISQUE_NUMERO WHERE c.VIP_NUMERO="+numeroVip+";";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};


/////////////////////////////////////////A R T I C L E S  V I P\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

module.exports.afficherArticleVip = function(numeroVip,callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT VIP_NOM, VIP_PRENOM, v.VIP_NUMERO, ARTICLE_TITRE, ARTICLE_RESUME, ARTICLE_DATE_INSERT FROM vip v LEFT JOIN apoursujet a ";
          sql = sql + "ON v.VIP_NUMERO=a.VIP_NUMERO LEFT JOIN article ar ON ";
          sql = sql + "a.ARTICLE_NUMERO=ar.ARTICLE_NUMERO WHERE v.VIP_NUMERO="+numeroVip+";";
                          console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
};

module.exports.listeVipNomPrenom = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_NOM, VIP_PRENOM, VIP_NUMERO FROM vip;";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

///////////////////////////////////////A L B U M  P H O T O S\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

module.exports.afficherToutesPhotosPrincipales = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO as numeroVip, VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE, v.VIP_NUMERO as numVip FROM vip v JOIN photo p ON ";
                sql = sql + "v.VIP_NUMERO=p.VIP_NUMERO WHERE PHOTO_NUMERO=1;";
                          //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
