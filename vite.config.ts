import { defineConfig } from 'vite'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import react from '@vitejs/plugin-react'

const vitestConfig: VitestUserConfigInterface = {
  test: {
   environment:"happy-dom"
  }
};

export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
});