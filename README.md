# Prince Mehmi

A small personal website built with [Astro](https://astro.build/).

## Local development

Install Node.js 22.19 or newer, then run:

```sh
npm install
npm run dev
```

Astro will print the local URL, usually `http://localhost:4321`.

## Production build

```sh
npm run build
npm run preview
```

The static production site is written to `dist/`.

## Editing the site

The personal copy and external links live in `src/content/site.ts`. Missing
optional links are omitted automatically. Layout and metadata live in
`src/pages/index.astro`, and the visual design is in `src/styles/global.css`.

## Domain and deployment

The repository is configured for `https://www.princemehmi.com` in
`astro.config.mjs` and `public/CNAME`.

To use another domain:

1. Change `site` in `astro.config.mjs`.
2. Update `public/CNAME` to the hostname only.
3. Point the domain's DNS records at the chosen static host.
4. Configure that same domain in the hosting provider and enable HTTPS.

Any static host that can publish the `dist/` directory will work. For GitHub
Pages, configure a GitHub Actions workflow to run `npm ci` and `npm run build`,
then upload `dist/` as the Pages artifact.

Optional details that can be added later in `src/content/site.ts` include a
verified writing link or other personal website.
