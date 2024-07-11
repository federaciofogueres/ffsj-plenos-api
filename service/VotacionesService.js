'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');

/**
 * Obtener todas las votaciones
 *
 * returns ResponseVotaciones
 **/
exports.votacionesGET = function() {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_plenos_votaciones", null).then(res => {
      resolve(extraService.transformResponse(res, "votaciones", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar una votación por ID
 *
 * id Integer 
 * returns Status
 **/
exports.votacionesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.delete(id, "ffsj_plenos_votaciones", false).then(res => {
      resolve(extraService.transformResponse(res, null, true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Obtener una votación por ID
 *
 * id Integer 
 * returns Votacion
 **/
exports.votacionesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.get(id, "ffsj_plenos_votaciones").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "votaciones", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el documento " + id}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar una votación por ID
 *
 * body Votacion 
 * id Integer 
 * returns Status
 **/
exports.votacionesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    try {
      extraService.update(body, "ffsj_plenos_votaciones", id).then(res => {
        resolve(extraService.transformResponse(res, "votaciones", true));
      }).catch(res => {
        reject(utils.respondWithCode(500, extraService.transformResponse(res, null, false)));
      });
    } catch (error) {
      reject(utils.respondWithCode(500, extraService.transformResponse(error, null, false)));
    }
  });
}


/**
 * Crear una nueva votación
 *
 * body Votacion 
 * returns Status
 **/
exports.votacionesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    extraService.set(body, 'ffsj_plenos_votaciones', false).then(res => {
      resolve(extraService.transformResponse(res, 'votaciones', true));
    }).catch(err => {
      reject(utils.respondWithCode(500, err))
    })
  });
}

