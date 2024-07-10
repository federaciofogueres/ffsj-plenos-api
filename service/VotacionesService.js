'use strict';


/**
 * Obtener todas las votaciones
 *
 * returns ResponseVotaciones
 **/
exports.votacionesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "votaciones" : [ {
    "fecha" : "2000-01-23T04:56:07.000+00:00",
    "favor" : 6,
    "idPunto" : 5,
    "blanco" : 5,
    "id" : 0,
    "infoExtra" : "infoExtra",
    "contra" : 1
  }, {
    "fecha" : "2000-01-23T04:56:07.000+00:00",
    "favor" : 6,
    "idPunto" : 5,
    "blanco" : 5,
    "id" : 0,
    "infoExtra" : "infoExtra",
    "contra" : 1
  } ],
  "status" : {
    "message" : "La llamada ha ido bien",
    "status" : 200
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
 * Obtener una votación por ID
 *
 * id Integer 
 * returns Votacion
 **/
exports.votacionesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fecha" : "2000-01-23T04:56:07.000+00:00",
  "favor" : 6,
  "idPunto" : 5,
  "blanco" : 5,
  "id" : 0,
  "infoExtra" : "infoExtra",
  "contra" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
 * Crear una nueva votación
 *
 * body Votacion 
 * returns Status
 **/
exports.votacionesPOST = function(body) {
  return new Promise(function(resolve, reject) {
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

