# Svelte Slides

Use Svelte and Markdown to create beautiful presentations. 🪄

🚧 Work in progress 🚧

- [x] Slides
- [ ] Fullscreen mode
- [ ] Speaker notes
- [ ] Pre-built components
- [ ] CLI
- [ ] Deployment

## Features

- ✍️ Write slides using Markdown and HTML
- 🐧 Use Svelte components
- 🪄 Syntax highlight
- 🎨 Themable

## Getting Started

1. Clone the project: `git clone https://github.com/mattcroat/svelte-slides.git`
2. Install dependencies: `npm i`
3. Run the development server: `npm run dev`
4. Start working on your slides: `routes/index.md`

## Creating Slides

Slides are separated with `---` representing `<hr>`.

```
# Slide 1

Content

---

# Slide 2

Content

---
```

## Navigation

You can navigate using `ArrowLeft` and `ArrowRight` but you can change and extend the behavior inside `src/layout.svelte`.

## Theming

- Global styles are inside `styles/global.css`
- Syntax highlight styles are inside `styles/syntax.css` using [Night Owl](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-night-owl.css) as the default theme but you can find more [Prism themes](https://github.com/PrismJS/prism-themes) or create your own
- You can change the slide styles in `slide.svelte`

## Custom Components

You can import and use any Svelte component inside the `<script>` tag in `routes/index.md`.

```
<script lang="ts">
  import Counter from '$lib/components/mdsvex/counter.svelte'
</script>

# Slide

<Counter />

---
```

You can create custom elements by creating a Svelte component named as the HTML element you want to replace and import and export it inside `src/layout.svelte`.

```html
<script context="module">
  import h1 from '$lib/components/mdsvex/h1.svelte'
  export { h1 }
</script>
```


## How Does It Work?

- 🐧 [mdsvex](https://mdsvex.pngwn.io/) is used for preprocessing Markdown, syntax highlight and custom components
- 🪄 It uses a preprocessor that separates the slides by `---` and turns each slide into a `<Slide />` component that is made navigatable by showing and hiding slides and styled using CSS with animations on transitions
- 🏪 A store is used to update the slide based on the URL hash and subscribe to when a slide is updated
- 🎨 The style and animations for the slides is inside `lib/components/mdsvex/slide.svelte`
- 🎁 The `layout.svelte` component is a special `mdsvex` component that wraps everything and has your custom components, styles and navigation logic
