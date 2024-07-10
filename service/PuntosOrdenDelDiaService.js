'use strict';


/**
 * Obtener todos los puntos del orden del día
 *
 * returns ResponsePuntosOrdenDelDia
 **/
exports.puntos_orden_del_diaGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "puntosOrdenDelDia" : [ {
    "texto" : "texto",
    "idPleno" : 6,
    "titulo" : "titulo",
    "id" : 0
  }, {
    "texto" : "texto",
    "idPleno" : 6,
    "titulo" : "titulo",
    "id" : 0
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
 * Eliminar un punto del orden del día por ID
 *
 * id Integer 
 * returns Status
 **/
exports.puntos_orden_del_diaIdDELETE = function(id) {
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
 * Obtener un punto del orden del día por ID
 *
 * id Integer 
 * returns PuntoOrdenDelDia
 **/
exports.puntos_orden_del_diaIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "texto" : "texto",
  "idPleno" : 6,
  "titulo" : "titulo",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar un punto del orden del día por ID
 *
 * body PuntoOrdenDelDia 
 * id Integer 
 * returns Status
 **/
exports.puntos_orden_del_diaIdPUT = function(body,id) {
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
 * Crear un nuevo punto del orden del día
 *
 * body PuntoOrdenDelDia 
 * returns Status
 **/
exports.puntos_orden_del_diaPOST = function(body) {
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

