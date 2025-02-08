import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/<substitution>/', // Replace <REPOSITORY_NAME> with your actual repository name
});
