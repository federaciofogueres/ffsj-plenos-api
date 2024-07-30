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
 * Obtener una asistencia por ID
 *
 * id Integer 
 * returns Asistencia
 **/
exports.asistenciaIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    extraService.get(id, "ffsj_plenos_asistencia").then(res => {
      if(res !== 0)
        resolve(extraService.transformResponse(res, "asistencias", true));
      else
        reject(utils.respondWithCode(404, extraService.transformResponse({codigo: 404, message: "No existen plenos para el usuario " + id}, null, false)));
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
var editAsistenciaFromUsuario = exports.asistenciaIdPlenoAsociadosIdAsociadoPUT = function(body, idPleno, idAsociado) {
  return new Promise(function(resolve, reject) {
    console.log('DELEGANDO VOTO -> ', body, idPleno, idAsociado);
    extraService.special(
      `
      UPDATE u438573835_censo.ffsj_plenos_asistencia SET idAsociado = '${body.idAsociado}', delegado = ${body.delegado}, asistenciaConfirmada = ${body.asistenciaConfirmada}, asistenciaConfirmadaPorSecretaria = ${body.asistenciaConfirmadaPorSecretaria} WHERE (idPleno = '${idPleno}') and (idAsociado = '${idAsociado}');
      `
    ).then(res => {
      resolve(extraService.transformResponse(res, null, true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}

/**
 * Eliminar una asistencia por ID
 *
 * idPleno Integer 
 * idAsociado Integer 
 * returns Status
 **/
var deleteAsociadoFromPleno = exports.asistenciaIdPlenoAsociadosIdAsociadoDELETE = function(idPleno,idAsociado) {
  return new Promise(function(resolve, reject) {
    extraService.special(
      `DELETE FROM u438573835_censo.ffsj_plenos_asistencia WHERE idPleno = ${idPleno} AND idAsociado = ${idAsociado};`
    ).then(res => {
      resolve(extraService.transformResponse(res, null, true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}

/**
 * Crear una nueva asistencia
 *
 * body Asistencia 
 * returns Status
 **/
var agregarAsistenteAPleno = exports.asistenciaPOST = function(body) {
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
      INSERT INTO u438573835_censo.ffsj_plenos_asistencia (idPleno, idAsociado, delegado, asistenciaConfirmada, asistenciaConfirmadaPorSecretaria) VALUES ('${idPleno}', '${idAsociado}', '0', '0', '0');
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

/**
 * Confirmar una nueva asistencia
 *
 * idPleno Integer 
 * nifAsociado Integer 
 * returns Status
 **/
exports.asistenciaIdPlenoAsociadosIdAsociadoDelegacionNifAsociadoPOST = function(idPleno, idAsociado, nifAsociado) {
  return new Promise(async function(resolve, reject) {
    let result = await extraService.special(`SELECT id FROM u438573835_censo.asociados WHERE nif like '${nifAsociado}';`);
    let idDelegado = result[0].id;

    let existe = await extraService.special(`SELECT * FROM u438573835_censo.ffsj_plenos_asistencia WHERE idPleno = ${idPleno} AND idAsociado = ${idDelegado};`);
    if (existe === 0) {
      editAsistenciaFromUsuario({idPleno, idAsociado: idDelegado, delegado: 1, asistenciaConfirmada: 0, asistenciaConfirmadaPorSecretaria: 0}, idPleno, idAsociado).then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      });
    } else {
      reject(utils.respondWithCode(500, 'No se puede delegar el voto en una persona que ya asiste al pleno.'));
    }
    console.log(existe);


  });
}

/**
 * Obtener la asistencia de un pleno por IDPleno
 *
 * idPleno Integer 
 * returns ResponseAsistencias
 **/
exports.plenosIdPlenoAsistenciaGET = function(idPleno) {
  return new Promise(function(resolve, reject) {
    extraService.get(null, "ffsj_plenos_asistencia", `
      SELECT * FROM u438573835_censo.ffsj_plenos_asistencia where idPleno = ${idPleno};
      `).then(res => {
      resolve(extraService.transformResponse(res, "asistencias", true));
    }).catch(res => {
      reject(utils.respondWithCode(500, res));
    });
  });
}