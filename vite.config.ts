import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

export default defineConfig({
	build: {
		outDir: 'build',
	},
	plugins: [
		react(),
		reactRefresh(),
		alias({
			entries: [
				{
					find: 'config',
					replacement: resolve(__dirname, './src/config'),
				},
				{
					find: 'modules',
					replacement: resolve(__dirname, './src/modules'),
				},
				{
					find: 'components',
					replacement: resolve(__dirname, './src/modules/shared/components'),
				},
			],
		}),
	],
});
