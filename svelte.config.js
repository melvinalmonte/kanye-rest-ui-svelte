import adapter from '@sveltejs/adapter-auto';
// uncomment line below for static deployment ie: deploy to s3, etc.
// import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// uncomment line below when using static mode when deploying to s3
		// adapter: adapter({
		// 	fallback: 'index.html'
		// })
		adapter: adapter()
	}
};

export default config;
