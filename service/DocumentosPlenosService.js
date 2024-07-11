'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');

/**
 * Obtener todas las relaciones documentos-plenos
 *
 * returns ResponseDocumentosPlenos
 **/
exports.documentos_plenosGET = function() {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_plenos_documentos_plenos", null).then(res => {
      resolve(extraService.transformResponse(res, "documentos", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar una relación documento-pleno por ID
 *
 * id Integer 
 * returns Status
 **/
exports.documentos_plenosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.delete(id, "ffsj_plenos_documentos_plenos", false).then(res => {
      resolve(extraService.transformResponse(res, null, true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Obtener una relación documento-pleno por ID
 *
 * id Integer 
 * returns DocumentosPlenos
 **/
exports.documentos_plenosIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.get(id, "ffsj_plenos_documentos_plenos").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "documentos", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el documento " + id}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar una relación documento-pleno por ID
 *
 * body DocumentosPlenos 
 * id Integer 
 * returns Status
 **/
exports.documentos_plenosIdPUT = function(_body,_id) {
  return new Promise(function(resolve, _reject) {
    resolve(utils.respondWithCode(204, {message: "No implementado"}));
    // try {
    //   extraService.update(body, "ffsj_plenos_documentos_plenos", id).then(res => {
    //     resolve(extraService.transformResponse(res, "documentos_plenos", true));
    //   }).catch(res => {
    //     reject(utils.respondWithCode(500, extraService.transformResponse(res, null, false)));
    //   });
    // } catch (error) {
    //   reject(utils.respondWithCode(500, extraService.transformResponse(error, null, false)));
    // }
  });
}


/**
 * Crear una nueva relación documento-pleno
 *
 * body DocumentosPlenos 
 * returns Status
 **/
exports.documentos_plenosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    try {
      extraService.set(body, 'ffsj_plenos_documentos_plenos', false).then(res => {
        resolve(extraService.transformResponse(res, 'documentos_plenos', true));
      }).catch(err => {
        reject(utils.respondWithCode(500, err))
      })
    } catch (error) {
      reject(utils.respondWithCode(500, error))
    }
  });
}

