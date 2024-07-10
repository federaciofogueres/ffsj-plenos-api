'use strict';


/**
 * Obtener todas las relaciones documentos-plenos
 *
 * returns ResponseDocumentosPlenos
 **/
exports.documentos_plenosGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "documentosPlenos" : [ {
    "idPleno" : 0,
    "idDocumento" : 6
  }, {
    "idPleno" : 0,
    "idDocumento" : 6
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
 * Eliminar una relación documento-pleno por ID
 *
 * id Integer 
 * returns Status
 **/
exports.documentos_plenosIdDELETE = function(id) {
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
 * Obtener una relación documento-pleno por ID
 *
 * id Integer 
 * returns DocumentosPlenos
 **/
exports.documentos_plenosIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idPleno" : 0,
  "idDocumento" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar una relación documento-pleno por ID
 *
 * body DocumentosPlenos 
 * id Integer 
 * returns Status
 **/
exports.documentos_plenosIdPUT = function(body,id) {
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
 * Crear una nueva relación documento-pleno
 *
 * body DocumentosPlenos 
 * returns Status
 **/
exports.documentos_plenosPOST = function(body) {
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

