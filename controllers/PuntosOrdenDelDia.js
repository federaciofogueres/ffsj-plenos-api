'use strict';

var utils = require('../utils/writer.js');
var PuntosOrdenDelDia = require('../service/PuntosOrdenDelDiaService');

module.exports.puntos_orden_del_diaGET = function puntos_orden_del_diaGET (req, res, next) {
  PuntosOrdenDelDia.puntos_orden_del_diaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.puntos_orden_del_diaIdDELETE = function puntos_orden_del_diaIdDELETE (req, res, next, id) {
  PuntosOrdenDelDia.puntos_orden_del_diaIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.puntos_orden_del_diaIdDocumentosGET = function puntos_orden_del_diaIdDocumentosGET (req, res, next, id) {
  PuntosOrdenDelDia.puntos_orden_del_diaIdDocumentosGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.puntos_orden_del_diaIdGET = function puntos_orden_del_diaIdGET (req, res, next, id) {
  PuntosOrdenDelDia.puntos_orden_del_diaIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.puntos_orden_del_diaIdPUT = function puntos_orden_del_diaIdPUT (req, res, next, body, id) {
  PuntosOrdenDelDia.puntos_orden_del_diaIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.puntos_orden_del_diaIdVotacionesGET = function puntos_orden_del_diaIdVotacionesGET (req, res, next, id) {
  PuntosOrdenDelDia.puntos_orden_del_diaIdVotacionesGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.puntos_orden_del_diaPOST = function puntos_orden_del_diaPOST (req, res, next, body) {
  PuntosOrdenDelDia.puntos_orden_del_diaPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
