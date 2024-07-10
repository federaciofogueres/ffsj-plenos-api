'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');

/**
 * Obtener todas las consultas
 *
 * returns ResponseConsultas
 **/
exports.consultasGET = function() {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_plenos_consultas", null).then(res => {
      resolve(extraService.transformResponse(res, "consultas", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar una consulta por ID
 *
 * id Integer 
 * returns Status
 **/
exports.consultasIdDELETE = function(idPleno) {
  return new Promise(function(resolve, reject) {
    extraService.delete(idPleno, "ffsj_plenos_consultas", true).then(res => {
      resolve(extraService.transformResponse(res, null, true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });


}


/**
 * Obtener una consulta por ID
 *
 * id Integer 
 * returns Consulta
 **/
exports.consultasIdGET = function(idPleno) {
  return new Promise(function(resolve, reject) {
    extraService.get(idPleno, "ffsj_plenos_consultas").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "consultas", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el pleno " + idPleno}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar una consulta por ID
 *
 * body Consulta 
 * id Integer 
 * returns Status
 **/
exports.consultasIdPUT = function() {
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
 * Crear una nueva consulta
 *
 * body Consulta 
 * returns Status
 **/
exports.consultasPOST = function(body) {
  return new Promise(function(resolve, reject) {
    extraService.set(body, 'ffsj_plenos_consultas', false).then(res => {
      resolve(extraService.transformResponse(res, 'consultas', true));
    }).catch(err => {
      reject(utils.respondWithCode(500, err))
    })
  });
}

