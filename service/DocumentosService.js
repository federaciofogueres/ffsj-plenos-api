'use strict';


/**
 * Obtener todos los documentos
 *
 * returns ResponseDocumentos
 **/
exports.documentosGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "documentos" : [ {
    "descripcion" : "descripcion",
    "titulo" : "titulo",
    "id" : 0,
    "fecha_creacion" : "2000-01-23T04:56:07.000+00:00",
    "autor" : 6
  }, {
    "descripcion" : "descripcion",
    "titulo" : "titulo",
    "id" : 0,
    "fecha_creacion" : "2000-01-23T04:56:07.000+00:00",
    "autor" : 6
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
 * Eliminar un documento por ID
 *
 * id Integer 
 * returns Status
 **/
exports.documentosIdDELETE = function(id) {
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
 * Obtener un documento por ID
 *
 * id Integer 
 * returns Documento
 **/
exports.documentosIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "descripcion" : "descripcion",
  "titulo" : "titulo",
  "id" : 0,
  "fecha_creacion" : "2000-01-23T04:56:07.000+00:00",
  "autor" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar un documento por ID
 *
 * body Documento 
 * id Integer 
 * returns Status
 **/
exports.documentosIdPUT = function(body,id) {
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
 * Crear un nuevo documento
 *
 * body Documento 
 * returns Status
 **/
exports.documentosPOST = function(body) {
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

