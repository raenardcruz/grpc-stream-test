<template>
  <div>
      <button @click="startStream">Start Stream</button>
      <ul>
          <li v-for="msg in messages" :key="msg">{{ msg }}</li>
      </ul>
  </div>
</template>

<script lang="ts">
import { StreamServiceClient } from 'proto/stream_grpc_web_pb';
import { Empty, Message } from 'proto/stream_pb';

export default {
  data() {
      return {
          messages: [] as string[],
      };
  },
  methods: {
      startStream() {
          const client = new StreamServiceClient('http://localhost:8080');
          const request = new Empty();
          const stream = client.getStream(request);

          stream.on('data', (message: Message) => {
              this.messages.push(message.getData());
          });

          stream.on('error', (err: any) => {
              console.error('Stream error:', err);
          });

          stream.on('end', () => {
              console.log('Stream ended');
          });
      },
  },
};
</script>