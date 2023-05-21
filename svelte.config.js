import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		alias: {
			$components: 'src/components',
			$utils: 'src/utils',
			$types: 'src/app.d.ts',
			$stores: 'src/stores',
			$data: 'src/data'
		}
	}
};

export default config;
