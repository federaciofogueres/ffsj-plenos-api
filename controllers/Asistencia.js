'use strict';

var utils = require('../utils/writer.js');
var Asistencia = require('../service/AsistenciaService');

module.exports.asistenciaGET = function asistenciaGET (req, res, next) {
  Asistencia.asistenciaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.asistenciaIdDELETE = function asistenciaIdDELETE (req, res, next, id) {
  Asistencia.asistenciaIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.asistenciaIdGET = function asistenciaIdGET (req, res, next, id) {
  Asistencia.asistenciaIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.asistenciaIdPUT = function asistenciaIdPUT (req, res, next, body, id) {
  Asistencia.asistenciaIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.asistenciaIdPlenoAsociadosIdAsociadoGET = function asistenciaIdPlenoAsociadosIdAsociadoGET (req, res, next, idPleno, idAsociado) {
  Asistencia.asistenciaIdPlenoAsociadosIdAsociadoGET(idPleno, idAsociado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.asistenciaIdPlenoAsociadosIdAsociadoPOST = function asistenciaIdPlenoAsociadosIdAsociadoPOST (req, res, next, idPleno, idAsociado) {
  Asistencia.asistenciaIdPlenoAsociadosIdAsociadoPOST(idPleno, idAsociado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.asistenciaPOST = function asistenciaPOST (req, res, next, body) {
  Asistencia.asistenciaPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
