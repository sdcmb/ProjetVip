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
            let sql = "SELECT VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE, v.VIP_NUMERO FROM vip v JOIN photo p ON v.VIP_NUMERO=p.VIP_NUMERO WHERE VIP_NOM LIKE '" +connexion.escape(lettre)+ "%';";
                          // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
