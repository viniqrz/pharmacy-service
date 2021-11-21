// package: 
// file: pharmacy.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as pharmacy_pb from "./pharmacy_pb";

interface IPharmacyService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: IPharmacyService_IList;
}

interface IPharmacyService_IList extends grpc.MethodDefinition<pharmacy_pb.Void, pharmacy_pb.PharmacyList> {
    path: "/Pharmacy/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pharmacy_pb.Void>;
    requestDeserialize: grpc.deserialize<pharmacy_pb.Void>;
    responseSerialize: grpc.serialize<pharmacy_pb.PharmacyList>;
    responseDeserialize: grpc.deserialize<pharmacy_pb.PharmacyList>;
}

export const PharmacyService: IPharmacyService;

export interface IPharmacyServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<pharmacy_pb.Void, pharmacy_pb.PharmacyList>;
}

export interface IPharmacyClient {
    list(request: pharmacy_pb.Void, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyList) => void): grpc.ClientUnaryCall;
    list(request: pharmacy_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyList) => void): grpc.ClientUnaryCall;
    list(request: pharmacy_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyList) => void): grpc.ClientUnaryCall;
}

export class PharmacyClient extends grpc.Client implements IPharmacyClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: pharmacy_pb.Void, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyList) => void): grpc.ClientUnaryCall;
    public list(request: pharmacy_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyList) => void): grpc.ClientUnaryCall;
    public list(request: pharmacy_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pharmacy_pb.PharmacyList) => void): grpc.ClientUnaryCall;
}
