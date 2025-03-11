package main

import (
	"fmt"
	"grpc-stream/proto" // Adjust based on your package structure
	"log"
	"net/http"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

type streamServer struct {
	proto.UnimplementedStreamServiceServer
}

func (s *streamServer) GetStream(req *proto.Empty, stream proto.StreamService_GetStreamServer) error {
	for i := 0; i < 100; i++ {
		msg := &proto.Message{Data: fmt.Sprint("Message ", i)}
		if err := stream.Send(msg); err != nil {
			return err
		}
	}
	return nil
}

func corsMiddleware(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, x-user-agent, x-grpc-web")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		h.ServeHTTP(w, r)
	})
}

func main() {
	s := &streamServer{}
	server := grpc.NewServer()
	proto.RegisterStreamServiceServer(server, s)
	reflection.Register(server)
	wrap := grpcweb.WrapServer(server)
	httpServer := http.NewServeMux()
	httpServer.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		wrap.ServeHTTP(w, r)
	})

	log.Println("Server started at :8080")
	if err := http.ListenAndServe(":8080", corsMiddleware(httpServer)); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
