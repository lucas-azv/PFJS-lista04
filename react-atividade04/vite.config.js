import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PFJS-lista04/', // Atualize para refletir o novo caminho base
});
