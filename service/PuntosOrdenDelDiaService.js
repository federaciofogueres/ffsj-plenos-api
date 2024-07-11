'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');

/**
 * Obtener todos los puntos del orden del día
 *
 * returns ResponsePuntosOrdenDelDia
 **/
exports.puntos_orden_del_diaGET = function() {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_plenos_puntos_orden_del_dia", null).then(res => {
      resolve(extraService.transformResponse(res, "puntosOrdenDelDia", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar un punto del orden del día por ID
 *
 * id Integer 
 * returns Status
 **/
exports.puntos_orden_del_diaIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.delete(id, "ffsj_plenos_puntos_orden_del_dia", false).then(res => {
      resolve(extraService.transformResponse(res, null, true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Obtener un punto del orden del día por ID
 *
 * id Integer 
 * returns PuntoOrdenDelDia
 **/
exports.puntos_orden_del_diaIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.get(id, "ffsj_plenos_puntos_orden_del_dia").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "puntosOrdenDelDia", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el punto " + id}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar un punto del orden del día por ID
 *
 * body PuntoOrdenDelDia 
 * id Integer 
 * returns Status
 **/
exports.puntos_orden_del_diaIdPUT = function(body, id) {
  return new Promise(function(resolve, reject) {
    try {
      extraService.update(body, "ffsj_plenos_puntos_orden_del_dia", id).then(res => {
        resolve(extraService.transformResponse(res, "puntosOrdenDelDia", true));
      }).catch(res => {
        reject(utils.respondWithCode(500, extraService.transformResponse(res, null, false)));
      });
    } catch (error) {
      reject(utils.respondWithCode(500, extraService.transformResponse(error, null, false)));
    }
  });
}


/**
 * Crear un nuevo punto del orden del día
 *
 * body PuntoOrdenDelDia 
 * returns Status
 **/
exports.puntos_orden_del_diaPOST = function(body) {
  return new Promise(function(resolve, reject) {
    extraService.set(body, 'ffsj_plenos_puntos_orden_del_dia', false).then(res => {
      resolve(extraService.transformResponse(res, 'puntosOrdenDelDia', true));
    }).catch(err => {
      reject(utils.respondWithCode(500, err))
    })
  });
}

/**
 * Obtener documentos de un punto del día por ID del punto
 *
 * id Integer 
 * returns ResponseDocumentos
 **/
exports.puntos_orden_del_diaIdDocumentosGET = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.get(null, null, `SELECT * FROM u438573835_censo.ffsj_plenos_informacion_punto_del_dia WHERE idPunto = ${id};`).then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "puntosOrdenDelDia", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el punto " + id}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}

/**
 * Obtener votaciones de un punto del día por ID del punto
 *
 * id Integer 
 * returns ResponseVotaciones
 **/
exports.puntos_orden_del_diaIdVotacionesGET = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.get(null, null, `SELECT * FROM u438573835_censo.votaciones WHERE idPunto = ${id};`).then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "puntosOrdenDelDia", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el punto " + id}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}