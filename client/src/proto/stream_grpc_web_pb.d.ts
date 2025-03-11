import * as grpcWeb from 'grpc-web';

import * as stream_pb from './stream_pb'; // proto import: "stream.proto"


export class StreamServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getStream(
    request: stream_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<stream_pb.Message>;

}

export class StreamServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getStream(
    request: stream_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<stream_pb.Message>;

}

