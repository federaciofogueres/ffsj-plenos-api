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

module.exports.asistenciaIdGET = function asistenciaIdGET (req, res, next, id) {
  Asistencia.asistenciaIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.asistenciaIdPlenoAsociadosIdAsociadoDELETE = function asistenciaIdPlenoAsociadosIdAsociadoDELETE (req, res, next, idPleno, idAsociado) {
  Asistencia.asistenciaIdPlenoAsociadosIdAsociadoDELETE(idPleno, idAsociado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.asistenciaIdPlenoAsociadosIdAsociadoDelegacionNifAsociadoPOST = function asistenciaIdPlenoAsociadosIdAsociadoDelegacionNifAsociadoPOST (req, res, next, idPleno, idAsociado, nifAsociado) {
  Asistencia.asistenciaIdPlenoAsociadosIdAsociadoDelegacionNifAsociadoPOST(idPleno, idAsociado, nifAsociado)
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

module.exports.asistenciaIdPlenoAsociadosIdAsociadoPUT = function asistenciaIdPlenoAsociadosIdAsociadoPUT (req, res, next, body, idPleno, idAsociado) {
  Asistencia.asistenciaIdPlenoAsociadosIdAsociadoPUT(body, idPleno, idAsociado)
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
