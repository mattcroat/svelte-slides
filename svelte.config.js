import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexCompileOptions} */
const mdsvexConfig = {
  extensions: ['.md'],
  layout: './src/layout.svelte',
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex(mdsvexConfig)],
  extensions: ['.svelte', '.md'],

  kit: {
    adapter: adapter(),
  },
}

export default config
