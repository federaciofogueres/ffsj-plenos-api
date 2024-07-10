'use strict';

var utils = require('../utils/writer.js');
var Documentos = require('../service/DocumentosService');

module.exports.documentosGET = function documentosGET (req, res, next) {
  Documentos.documentosGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentosIdDELETE = function documentosIdDELETE (req, res, next, id) {
  Documentos.documentosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentosIdGET = function documentosIdGET (req, res, next, id) {
  Documentos.documentosIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentosIdPUT = function documentosIdPUT (req, res, next, body, id) {
  Documentos.documentosIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentosPOST = function documentosPOST (req, res, next, body) {
  Documentos.documentosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
