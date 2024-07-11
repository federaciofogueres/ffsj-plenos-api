'use strict';

var extraService = require("../service/ExtraService");
var utils = require('../utils/writer.js');

/**
 * Obtener toda la información de puntos del día
 *
 * returns ResponseInformacionPuntoDelDia
 **/
exports.informacion_punto_del_diaGET = function() {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_plenos_informacion_punto_del_dia", null).then(res => {
      resolve(extraService.transformResponse(res, "informacionPuntoDelDia", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Eliminar información de punto del día por ID
 *
 * id Integer 
 * returns Status
 **/
exports.informacion_punto_del_diaIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.delete(id, "ffsj_plenos_informacion_punto_del_dia", false).then(res => {
      resolve(extraService.transformResponse(res, null, true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Obtener información de punto del día por ID
 *
 * id Integer 
 * returns InformacionPuntoDelDia
 **/
exports.informacion_punto_del_diaIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.get(id, "ffsj_plenos_informacion_punto_del_dia").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "informacionPuntoDelDia", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existe el documento " + id}, null, false)));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}


/**
 * Actualizar información de punto del día por ID
 *
 * body InformacionPuntoDelDia 
 * id Integer 
 * returns Status
 **/
exports.informacion_punto_del_diaIdPUT = function(_body,_id) {
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
 * Crear nueva información de punto del día
 *
 * body InformacionPuntoDelDia 
 * returns Status
 **/
exports.informacion_punto_del_diaPOST = function(body) {
  return new Promise(function(resolve, reject) {
    try {
      extraService.set(body, 'ffsj_plenos_informacion_punto_del_dia', false).then(res => {
        resolve(extraService.transformResponse(res, 'informacionPuntoDelDia', true));
      }).catch(err => {
        reject(utils.respondWithCode(500, err))
      })
    } catch (error) {
      reject(utils.respondWithCode(500, error))
    }
  });
}

