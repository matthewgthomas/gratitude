import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: path.resolve("./src/components"),
			$content: path.resolve("./src/content"),
			$data: path.resolve("./src/data"),
			$routes: path.resolve("./src/routes"),
			$styles: path.resolve("./src/styles")
		}
	}
});
