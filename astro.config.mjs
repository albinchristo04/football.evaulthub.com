import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://football.evaulthub.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});
