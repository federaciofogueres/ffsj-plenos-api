'use strict';


/**
 * Obtener todos los plenos
 *
 * returns ResponsePlenos
 **/
exports.plenoGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "plenos" : [ {
    "fecha" : 6,
    "titulo" : "titulo",
    "id" : 0,
    "informacion_extra" : "informacion_extra"
  }, {
    "fecha" : 6,
    "titulo" : "titulo",
    "id" : 0,
    "informacion_extra" : "informacion_extra"
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
 * Eliminar un pleno por ID
 *
 * id Integer 
 * returns Status
 **/
exports.plenoIdDELETE = function(id) {
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
 * Obtener un pleno por ID
 *
 * id Integer 
 * returns Pleno
 **/
exports.plenoIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fecha" : 6,
  "titulo" : "titulo",
  "id" : 0,
  "informacion_extra" : "informacion_extra"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar un pleno por ID
 *
 * body Pleno 
 * id Integer 
 * returns Status
 **/
exports.plenoIdPUT = function(body,id) {
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
 * Crear un nuevo pleno
 *
 * body Pleno 
 * returns Status
 **/
exports.plenoPOST = function(body) {
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

