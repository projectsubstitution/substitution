import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the React plugin for Vite

// Export the Vite configuration
export default defineConfig({
  plugins: [react()], // Use the React plugin
  server: {
    port: 3000, // Specify the development server port
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
});