'use strict';


/**
 * Obtener toda la información de puntos del día
 *
 * returns ResponseInformacionPuntoDelDia
 **/
exports.informacion_punto_del_diaGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "informacionPuntoDelDia" : [ {
    "idDocumento" : 6,
    "idPunto" : 0
  }, {
    "idDocumento" : 6,
    "idPunto" : 0
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
 * Eliminar información de punto del día por ID
 *
 * id Integer 
 * returns Status
 **/
exports.informacion_punto_del_diaIdDELETE = function(id) {
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
 * Obtener información de punto del día por ID
 *
 * id Integer 
 * returns InformacionPuntoDelDia
 **/
exports.informacion_punto_del_diaIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idDocumento" : 6,
  "idPunto" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar información de punto del día por ID
 *
 * body InformacionPuntoDelDia 
 * id Integer 
 * returns Status
 **/
exports.informacion_punto_del_diaIdPUT = function(body,id) {
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
 * Crear nueva información de punto del día
 *
 * body InformacionPuntoDelDia 
 * returns Status
 **/
exports.informacion_punto_del_diaPOST = function(body) {
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

