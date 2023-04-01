# App Store

## What was the necessity?

It's not fun to list every apps at places like portfolio, social media, etc. It's cringe too. So, I made this app to list all my apps at one place.

## How does it work?

No CMS, Just markdown. It's a static site generator. Just add a markdown file in `apps` folder and it will be listed in the app store.

Every meta data will be taken from the config.js inside ./components

## Tech Stack?

- NextJS (for SSR)
- gray-matter (for parsing markdown)
- remark-html (for markdown to html)

### The stuff inside the app

- react-simple-typewriter (for typing effect)
- fuse.js (for fuzzy search)
- utteranc.es (for comments)

## Why I didn't use i18n or next/image?

I use Cloudflare Pages for hosting. It doesn't support i18n and next/image. So, I didn't use them. If you use Netlify or Vercel, you can use them.

## How to use?

- Fork this repo
- Add your apps in `apps` folder
- Add your meta data in `config.js` inside `./components`
- Deploy it
