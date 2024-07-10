'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');

/**
 * Obtener todos los documentos
 *
 * returns ResponseDocumentos
 **/
exports.documentosGET = function() {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_plenos_documentos", null).then(res => {
      resolve(extraService.transformResponse(res, "documentos", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar un documento por ID
 *
 * id Integer 
 * returns Status
 **/
exports.documentosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.delete(id, "ffsj_plenos_documentos", true).then(res => {
      resolve(extraService.transformResponse(res, null, true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Obtener un documento por ID
 *
 * id Integer 
 * returns Documento
 **/
exports.documentosIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.get(id, "ffsj_plenos_documentos").then(res => {
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
 * Actualizar un documento por ID
 *
 * body Documento 
 * id Integer 
 * returns Status
 **/
exports.documentosIdPUT = function(body, id) {
  return new Promise(function(resolve, reject) {
    try {
      extraService.update(body, "ffsj_plenos_documentos", id).then(res => {
        resolve(extraService.transformResponse(res, "documentos", true));
      }).catch(res => {
        reject(utils.respondWithCode(500, extraService.transformResponse(res, null, false)));
      });
    } catch (error) {
      reject(utils.respondWithCode(500, extraService.transformResponse(error, null, false)));
    }
  });
}


/**
 * Crear un nuevo documento
 *
 * body Documento 
 * returns Status
 **/
exports.documentosPOST = function(body) {
  return new Promise(function(resolve, reject) {
    extraService.set(body, 'ffsj_plenos_documentos', false).then(res => {
      resolve(extraService.transformResponse(res, 'documentos', true));
    }).catch(err => {
      reject(utils.respondWithCode(500, err))
    })
  });
}

