'use strict';

var utils = require('../utils/writer.js');
var Votaciones = require('../service/VotacionesService');

module.exports.votacionesGET = function votacionesGET (req, res, next) {
  Votaciones.votacionesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.votacionesIdDELETE = function votacionesIdDELETE (req, res, next, id) {
  Votaciones.votacionesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.votacionesIdGET = function votacionesIdGET (req, res, next, id) {
  Votaciones.votacionesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.votacionesIdPOST = function votacionesIdPOST (req, res, next, body, id) {
  Votaciones.votacionesIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.votacionesIdPUT = function votacionesIdPUT (req, res, next, body, id) {
  Votaciones.votacionesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.votacionesIdVotantesGET = function votacionesIdVotantesGET (req, res, next, id) {
  Votaciones.votacionesIdVotantesGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.votacionesPOST = function votacionesPOST (req, res, next, body) {
  Votaciones.votacionesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
