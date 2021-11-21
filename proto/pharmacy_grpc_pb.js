// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var pharmacy_pb = require('./pharmacy_pb.js');

function serialize_PharmacyList(arg) {
  if (!(arg instanceof pharmacy_pb.PharmacyList)) {
    throw new Error('Expected argument of type PharmacyList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PharmacyList(buffer_arg) {
  return pharmacy_pb.PharmacyList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Void(arg) {
  if (!(arg instanceof pharmacy_pb.Void)) {
    throw new Error('Expected argument of type Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Void(buffer_arg) {
  return pharmacy_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var PharmacyService = exports.PharmacyService = {
  list: {
    path: '/Pharmacy/List',
    requestStream: false,
    responseStream: false,
    requestType: pharmacy_pb.Void,
    responseType: pharmacy_pb.PharmacyList,
    requestSerialize: serialize_Void,
    requestDeserialize: deserialize_Void,
    responseSerialize: serialize_PharmacyList,
    responseDeserialize: deserialize_PharmacyList,
  },
};

exports.PharmacyClient = grpc.makeGenericClientConstructor(PharmacyService);
