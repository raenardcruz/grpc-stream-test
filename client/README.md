# How to setup GRPC_Web on Vue JS (vite)
- install grpc dependencies
`npm install google-protobuf`
`npm install grpc-web`
- Create a the proto file in the src directory (NOTE: You only need to do this if you plan to generate directly to the proto folder. You can copy paste the content if you want to)
- Generate the code for js proto and grpc
`protoc -I=../proto --js_out=import_style=commonjs,binary:../client/src/proto --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:../client/src/proto --experimental_allow_proto3_optional stream.proto`
- To make grpc-web work on vite please follow the next instructions
- Install commonjs plugin for vite
`npm install @originjs/vite-plugin-commonjs --save-dev`
- in the vite.config.ts add these code:
`resolve: {
    preserveSymlinks: true,
  }`
- You need to install your proto folder as npm dependency
`npm install -D ./src/proto`