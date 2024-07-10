'use strict';


/**
 * Obtener todas las asistencias
 *
 * returns ResponseAsistencias
 **/
exports.asistenciaGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "asistencias" : [ {
    "idPleno" : 0,
    "idAsociado" : 6,
    "delegado" : true
  }, {
    "idPleno" : 0,
    "idAsociado" : 6,
    "delegado" : true
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
 * Eliminar una asistencia por ID
 *
 * id Integer 
 * returns Status
 **/
exports.asistenciaIdDELETE = function(id) {
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
 * Obtener una asistencia por ID
 *
 * id Integer 
 * returns Asistencia
 **/
exports.asistenciaIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idPleno" : 0,
  "idAsociado" : 6,
  "delegado" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar una asistencia por ID
 *
 * body Asistencia 
 * id Integer 
 * returns Status
 **/
exports.asistenciaIdPUT = function(body,id) {
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
 * Crear una nueva asistencia
 *
 * body Asistencia 
 * returns Status
 **/
exports.asistenciaPOST = function(body) {
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

