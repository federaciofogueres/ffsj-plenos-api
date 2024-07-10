'use strict';

var utils = require('../utils/writer.js');
var DocumentosPlenos = require('../service/DocumentosPlenosService');

module.exports.documentos_plenosGET = function documentos_plenosGET (req, res, next) {
  DocumentosPlenos.documentos_plenosGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentos_plenosIdDELETE = function documentos_plenosIdDELETE (req, res, next, id) {
  DocumentosPlenos.documentos_plenosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentos_plenosIdGET = function documentos_plenosIdGET (req, res, next, id) {
  DocumentosPlenos.documentos_plenosIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentos_plenosIdPUT = function documentos_plenosIdPUT (req, res, next, body, id) {
  DocumentosPlenos.documentos_plenosIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentos_plenosPOST = function documentos_plenosPOST (req, res, next, body) {
  DocumentosPlenos.documentos_plenosPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
