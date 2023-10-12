import adapter from '@sveltejs/adapter-cloudflare';
import sveltePreprocess from "svelte-preprocess";
import { optimizeImports } from "carbon-preprocess-svelte";



export default {
 preprocess: [
		  sveltePreprocess(),
		  optimizeImports()
	  ],   

	kit: {
        adapter: adapter({
            // See below for an explanation of these options
            routes: {
                include: ['/*'],
                exclude: ['<all>']
            }
        })
    }
};
