// package: 
// file: pharmacy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Void extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Void.AsObject;
    static toObject(includeInstance: boolean, msg: Void): Void.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Void, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Void;
    static deserializeBinaryFromReader(message: Void, reader: jspb.BinaryReader): Void;
}

export namespace Void {
    export type AsObject = {
    }
}

export class PharmacyItem extends jspb.Message { 
    getName(): string;
    setName(value: string): PharmacyItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PharmacyItem.AsObject;
    static toObject(includeInstance: boolean, msg: PharmacyItem): PharmacyItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PharmacyItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PharmacyItem;
    static deserializeBinaryFromReader(message: PharmacyItem, reader: jspb.BinaryReader): PharmacyItem;
}

export namespace PharmacyItem {
    export type AsObject = {
        name: string,
    }
}

export class PharmacyList extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<PharmacyItem>;
    setListList(value: Array<PharmacyItem>): PharmacyList;
    addList(value?: PharmacyItem, index?: number): PharmacyItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PharmacyList.AsObject;
    static toObject(includeInstance: boolean, msg: PharmacyList): PharmacyList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PharmacyList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PharmacyList;
    static deserializeBinaryFromReader(message: PharmacyList, reader: jspb.BinaryReader): PharmacyList;
}

export namespace PharmacyList {
    export type AsObject = {
        listList: Array<PharmacyItem.AsObject>,
    }
}
