/**
 * @fileoverview gRPC-Web generated client stub for stream
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.21.12
// source: stream.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.stream = require('./stream_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.stream.StreamServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.stream.StreamServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stream.Empty,
 *   !proto.stream.Message>}
 */
const methodDescriptor_StreamService_GetStream = new grpc.web.MethodDescriptor(
  '/stream.StreamService/GetStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.stream.Empty,
  proto.stream.Message,
  /**
   * @param {!proto.stream.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stream.Message.deserializeBinary
);


/**
 * @param {!proto.stream.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stream.Message>}
 *     The XHR Node Readable Stream
 */
proto.stream.StreamServiceClient.prototype.getStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stream.StreamService/GetStream',
      request,
      metadata || {},
      methodDescriptor_StreamService_GetStream);
};


/**
 * @param {!proto.stream.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stream.Message>}
 *     The XHR Node Readable Stream
 */
proto.stream.StreamServicePromiseClient.prototype.getStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stream.StreamService/GetStream',
      request,
      metadata || {},
      methodDescriptor_StreamService_GetStream);
};


module.exports = proto.stream;

