'use strict';

var utils = require('../utils/writer.js');
var Pleno = require('../service/PlenoService');

module.exports.plenoGET = function plenoGET (req, res, next) {
  Pleno.plenoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plenoIdDELETE = function plenoIdDELETE (req, res, next, id) {
  Pleno.plenoIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plenoIdGET = function plenoIdGET (req, res, next, id) {
  Pleno.plenoIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plenoIdPUT = function plenoIdPUT (req, res, next, body, id) {
  Pleno.plenoIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.plenoPOST = function plenoPOST (req, res, next, body) {
  Pleno.plenoPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
