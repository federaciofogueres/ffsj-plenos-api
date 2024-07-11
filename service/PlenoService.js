'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');

/**
 * Obtener todos los plenos
 *
 * returns ResponsePlenos
 **/
exports.plenoGET = function() {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_plenos_pleno", null).then(res => {
      resolve(extraService.transformResponse(res, "plenos", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar un pleno por ID
 *
 * id Integer 
 * returns Status
 **/
exports.plenoIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.delete(id, "ffsj_plenos_pleno", false).then(res => {
      resolve(extraService.transformResponse(res, null, true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Obtener un pleno por ID
 *
 * id Integer 
 * returns Pleno
 **/
exports.plenoIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.get(id, "ffsj_plenos_pleno").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "plenos", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el documento " + id}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar un pleno por ID
 *
 * body Pleno 
 * id Integer 
 * returns Status
 **/
exports.plenoIdPUT = function(body, id) {
  return new Promise(function(resolve, reject) {
    try {
      extraService.update(body, "ffsj_plenos_pleno", id).then(res => {
        resolve(extraService.transformResponse(res, "plenos", true));
      }).catch(res => {
        reject(utils.respondWithCode(500, extraService.transformResponse(res, null, false)));
      });
    } catch (error) {
      reject(utils.respondWithCode(500, extraService.transformResponse(error, null, false)));
    }
  });
}


/**
 * Crear un nuevo pleno
 *
 * body Pleno 
 * returns Status
 **/
exports.plenoPOST = function(body) {
  return new Promise(function(resolve, reject) {
    extraService.set(body, 'ffsj_plenos_pleno', false).then(res => {
      resolve(extraService.transformResponse(res, 'plenos', true));
    }).catch(err => {
      reject(utils.respondWithCode(500, err))
    })
  });
}

/**
 * Obtener puntos del día de un pleno por ID de pleno
 *
 * id Integer 
 * returns ResponsePuntosOrdenDelDia
 **/
exports.plenoIdPuntosGET = function(idPleno) {
  return new Promise(function(resolve, reject) {
    extraService.get(null, null, `SELECT * FROM u438573835_censo.ffsj_plenos_puntos_orden_del_dia WHERE idPleno = ${idPleno};`).then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "puntosOrdenDelDia", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el pleno " + idPleno}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}