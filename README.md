# Svelide

Make your slide with Svelte(HTML+CSS+JS).

Svelte + Slide = Svelide

## Features

- Make slide
  - Preview
  - List view
    - Set `#list` to URL hash
    - Create PDF with print
  - Dynamically page
    - Use JavaScript(TypeScript)
    - Use CSS (SCSS)
      - `<style lang="scss"></style>`
  - Build for SPA
- Publish
  - Build and Deploy
    - GitHub Pages
      - GitHub Actions
    - Other platforms

## Usage

### Setup

```sh
npx degit ssssota/svelide slide-directory-name
cd slide-directory-name
```

### Install dependencies

```sh
npm install
# yarn
# pnpm install
```

### Preview

```sh
npm run dev
# yarn dev
# pnpm dev
```

### Build

```sh
npm run build
# yarn build
# pnpm build
```

### Custom

- `/public`
  - Static files
  - `index.html`
    - title
    - OGP settings
    - meta tags
  - `global.css`
  - `favicon.png`
- `/src`
  - `App.svelte`
    - Page controller
  - `pages`
    - Insert your pages!

## Examples

- [Svelteを説く。](https://ssssota.github.io/svelte-intro-lt/)
