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
  return new Promise(async function(resolve, reject) {
    await updateVotes(id, await sumVotes(id))
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

/**
 * Votar
 *
 * body Voto 
 * id Integer 
 * returns Status
 **/
exports.votacionesIdPOST = function(body,id) {
  return new Promise(async function(resolve, reject) {
    try {
      const checkVotedResult = await checkVoted(body.idAsociado, id);
      if (checkVotedResult) {
        const resUpdate = await votacionesUpdateAsociado(body, id);
      } else {
        const resInsert = await extraService.special(
          `
            INSERT INTO u438573835_censo.ffsj_plenos_votaciones_asociados (idAsociado, idVotacion, favor, contra, blanco) VALUES (${body.idAsociado}, ${id}, ${body.favor}, ${body.contra}, ${body.blanco});
          `
        );
      }
      const sumVotesResult = await sumVotes(id);
      await updateVotes(id, sumVotesResult[0]);
      resolve(extraService.transformResponse(sumVotesResult, 'votaciones', true));
    } catch (error) {
      reject(utils.respondWithCode(500, error))
    }
  });
}

var checkVoted = function(idAsociado, idVotacion) {
  return new Promise(function(resolve, reject) {
    extraService.special(
      `
        SELECT * FROM u438573835_censo.ffsj_plenos_votaciones_asociados WHERE idAsociado = ${idAsociado} AND idVotacion = ${idVotacion};
      `
    ).then(res => {
      if (res.length > 0) {
        console.log('EXISTE VOTACIÓN -> ', res);
        resolve(true);
      } else {
        console.log('NO EXISTE VOTACIÓN');
        resolve(false);
      }
    }).catch(err => {
      console.log('ERROR -> ', err);
      reject(err);
    });
  });
}

var sumVotes = function(idVotacion) {
  return new Promise(function(resolve, reject) {
    extraService.special(
      `
        SELECT sum(favor) as favor, sum(contra) as contra, sum(blanco) as blanco FROM u438573835_censo.ffsj_plenos_votaciones_asociados where idVotacion = ${idVotacion};
      `
    ).then(res => {
      console.log('SUMAAAAAA -> ', res);
      resolve(res);
    }).catch(err => {
      resolve(err);
    })
  });
}

var updateVotes = function(idVotacion, votes) {
  return new Promise(function(resolve, reject) {
    extraService.special(
      `
        UPDATE u438573835_censo.ffsj_plenos_votaciones SET favor = ${votes.favor}, contra = ${votes.contra}, blanco = ${votes.blanco} WHERE (id = ${idVotacion});
      `
    ).then(res => {
      console.log('SUMAAAAAA -> ', res);
      resolve(res);
    }).catch(err => {
      resolve(err);
    })
  });
}

/**
 * Actualizar una votación por ID
 *
 * body Votacion 
 * id Integer 
 * returns Status
 **/
var votacionesUpdateAsociado = exports.votacionesUpdateAsociado = function(body,id) {
  return new Promise(function(resolve, reject) {
    extraService.special(
      `
        UPDATE u438573835_censo.ffsj_plenos_votaciones_asociados SET favor = ${body.favor}, contra = ${body.contra}, blanco = ${body.blanco} WHERE (idVotacion = ${id}) and (idAsociado = ${body.idAsociado});
      `
    ).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  });
}

/**
 * Obtener votantes de una votación por ID de votación
 *
 * id Integer 
 * returns Votantes
 **/
exports.votacionesIdVotantesGET = function(id) {
  return new Promise(async function(resolve, reject) {
    try {
      const votos = await extraService.special(`SELECT * FROM u438573835_censo.ffsj_plenos_votaciones_asociados WHERE idVotacion = ${id};`);
      const favor = [];
      const contra = []; 
      const blanco = [];

      for(let voto of votos) {
        if (voto.favor) {
          favor.push(await processVoteInfo(voto));
        } else if (voto.contra) {
          contra.push(await processVoteInfo(voto));
        } else if (voto.blanco) {
          blanco.push(await processVoteInfo(voto));
        }
      }


      resolve(extraService.transformResponse({favor, contra, blanco}, 'votantes', true));
      
    } catch (error) {
      console.log(error);
    }
  });
}

var processVoteInfo = async function(voto) {
  const datos = await extraService.special(`
    SELECT 
      a.nif, 
      a.nombre AS nombre_asociado, 
      a.apellidos, 
      (SELECT nombre 
        FROM u438573835_censo.asociaciones 
        WHERE id IN (
          SELECT idAsociacion 
          FROM u438573835_censo.historico 
          WHERE ejercicio = 11 
          AND idAsociado = a.id 
          AND (idCargo = 1 OR idCargo = 4)
        )
      ) AS nombre_asociacion,
      (SELECT idAsociacion 
        FROM u438573835_censo.historico 
        WHERE ejercicio = 11 
          AND idAsociado = a.id 
          AND (idCargo = 1 OR idCargo = 4)
        LIMIT 1
      ) AS id_asociacion
    FROM 
      u438573835_censo.asociados a
    WHERE 
      a.id = ${voto.idAsociado};
  `);
  voto.nif = datos[0].nif;
  voto.nombre = datos[0].nombre_asociado;
  voto.apellidos = datos[0].apellidos;
  voto.nombreAsociacion = datos[0].nombre_asociacion;
  voto.idAsociacion = datos[0].id_asociacion;
  return voto;
}