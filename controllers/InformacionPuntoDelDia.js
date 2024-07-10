'use strict';

var utils = require('../utils/writer.js');
var InformacionPuntoDelDia = require('../service/InformacionPuntoDelDiaService');

module.exports.informacion_punto_del_diaGET = function informacion_punto_del_diaGET (req, res, next) {
  InformacionPuntoDelDia.informacion_punto_del_diaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informacion_punto_del_diaIdDELETE = function informacion_punto_del_diaIdDELETE (req, res, next, id) {
  InformacionPuntoDelDia.informacion_punto_del_diaIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informacion_punto_del_diaIdGET = function informacion_punto_del_diaIdGET (req, res, next, id) {
  InformacionPuntoDelDia.informacion_punto_del_diaIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informacion_punto_del_diaIdPUT = function informacion_punto_del_diaIdPUT (req, res, next, body, id) {
  InformacionPuntoDelDia.informacion_punto_del_diaIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informacion_punto_del_diaPOST = function informacion_punto_del_diaPOST (req, res, next, body) {
  InformacionPuntoDelDia.informacion_punto_del_diaPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
