'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');

/**
 * Obtener todas las asistencias
 *
 * returns ResponseAsistencias
 **/
exports.asistenciaGET = function() {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_plenos_asistencia", null).then(res => {
      resolve(extraService.transformResponse(res, "asistencias", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar una asistencia por ID
 *
 * id Integer 
 * returns Status
 **/
exports.asistenciaIdDELETE = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
  "message" : "La llamada ha ido bien",
  "status" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener una asistencia por ID
 *
 * id Integer 
 * returns Asistencia
 **/
exports.asistenciaIdGET = function(idPleno) {
  return new Promise(function(resolve, reject) {
    extraService.get(idPleno, "ffsj_plenos_asistencia").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "asistencias", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el pleno " + idPleno}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar una asistencia por ID
 *
 * body Asistencia 
 * id Integer 
 * returns Status
 **/
exports.asistenciaIdPUT = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
  "message" : "La llamada ha ido bien",
  "status" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear una nueva asistencia
 *
 * body Asistencia 
 * returns Status
 **/
exports.asistenciaPOST = function(body) {
  return new Promise(function(resolve, reject) {
    extraService.set(body, 'ffsj_plenos_asistencia', false).then(res => {
      resolve(extraService.transformResponse(res, 'asistencias', true));
    }).catch(err => {
      reject(utils.respondWithCode(500, err))
    })
  });
}

/**
 * Obtener una asistencia por idPleno e idAsociado
 *
 * idPleno Integer 
 * idAsociado Integer 
 * returns Asistencia
 **/
exports.asistenciaIdPlenoAsociadosIdAsociadoGET = function(idPleno,idAsociado) {
  return new Promise(function(resolve, reject) {
    extraService.get(null, null, `SELECT * FROM u438573835_censo.ffsj_plenos_asistencia WHERE idPleno = ${idPleno} AND idAsociado = ${idAsociado};`).then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "asistencias", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el pleno " + idPleno}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}

/**
 * Confirmar una nueva asistencia
 *
 * idPleno Integer 
 * idAsociado Integer 
 * returns Status
 **/
exports.asistenciaIdPlenoAsociadosIdAsociadoPOST = function(idPleno,idAsociado) {
  return new Promise(function(resolve, reject) {
    extraService.special(`
      UPDATE u438573835_censo.ffsj_plenos_asistencia SET asistencia_confirmada = '1' WHERE (idPleno = '${idPleno}') and (idAsociado = '${idAsociado}');
      `).then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, null, true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el pleno " + idPleno}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}