# Alldrit.ca

The website for Alldrit Technologies, built with [Astro](https://astro.build/) and deployed as a static site to an AWS S3 bucket behind CloudFront.

## Development

```bash
pnpm install
pnpm dev
```

Astro serves the site locally at `http://localhost:4321`.

## Quality checks

```bash
pnpm check
pnpm build
```

The production build is written to `dist/`. Files in `static/` are copied through unchanged; this preserves the two existing project demos under `/project/`.

## Deploy

After authenticating the AWS CLI with an account that can update the `alldrit` bucket:

```bash
pnpm deploy
```

This builds the site and synchronizes `dist/` to `s3://alldrit`, deleting files no longer present in the build. S3 should use `index.html` as the index document and `404.html` as the error document.
