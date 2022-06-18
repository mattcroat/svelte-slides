import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

function slideDeck() {
  return {
    markup: async ({ content, filename }) => {
      if (filename.endsWith('md')) {
        let slideRegex = /<.*\/?h[1-6]>[\s\S]*?<hr>/gi
        let slideIndex = 1

        const slidesHTML = content.replace(slideRegex, (match) => {
          const html = match.replace('<hr>', '')
          return `<Slide slideIndex={${slideIndex++}}>${html}</Slide>`
        })

        return { code: slidesHTML }
      }
    },
  }
}

/** @type {import('mdsvex').MdsvexCompileOptions} */
const mdsvexConfig = {
  extensions: ['.md'],
  layout: './src/layout.svelte',
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex(mdsvexConfig), slideDeck()],
  extensions: ['.svelte', '.md'],

  kit: {
    adapter: adapter(),
  },
}

export default config
