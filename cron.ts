import axios from 'axios';

export default async function handler() {
  await axios.get('/api/generate');
}