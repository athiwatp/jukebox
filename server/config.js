export default {
  port: 3000,
  minVotes: 3,
  sources: ['youtube', 'soundcloud', 'file'],
  format: {
    channels: 2,
    bitDepth: 16,
    sampleRate: 44100,
    bitRate: 128000
  },
  maxRetries: 3,
  autoReload: false,
  soundcloud: {
    clientId: 'e3a269fc6e454e830d57b8f19a39adf3'
  }
};
