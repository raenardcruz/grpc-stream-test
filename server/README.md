# Steps to install
- Make sure protoc is installed
`sudo apt-get update`
`sudo apt-get install -y protoc`
- install protoc-gen-go and protoc0-gen-go-grpc
`sudo apt update`
`sudo apt install protoc-gen-go`
`sudo apt install protoc-gen-go-grpc`
- Generate go protobuf codes in this directory using:
`protoc --proto_path=../proto --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ../proto/stream.proto`
- The command above will create new files _pb.go