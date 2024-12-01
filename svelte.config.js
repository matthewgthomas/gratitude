import { mdsvex } from "mdsvex";
// import adapter from '@sveltejs/adapter-auto';
import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		adapter: adapterStatic({ strict: false })
	},

    preprocess: [mdsvex()],
    extensions: [".svelte", ".svx"]
};

export default config;
