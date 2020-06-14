import axios from 'axios';

// Dev (Emulator) http://10.0.2.2:3333
// Dev (Device) http://10.0.0.109:3333
// Production http://167.172.150.209

const baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://10.0.2.2:3333'
    : 'http://167.172.150.209';

const api = axios.create({
  baseURL,
});

export default api;
