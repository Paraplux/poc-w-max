import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	build: {
		outDir: 'build',
	},
	resolve: {
		alias: {
			'modules/': path.resolve(__dirname, './src/modules'),
		},
	},
	plugins: [react(), reactRefresh()],
});
