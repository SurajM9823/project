import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/project/', // Matches repository name in https://SurajM9823.github.io/project
});