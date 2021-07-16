# CS Storybook

## Requirements

Placeholder

## Install

```
npm install
```

## Serve

```
npm run storybook
```

## Build & Deployment

**Build**
```
npm run build-storybook
```
Output directory is `storybook-static`

**Deployment**
```
npm run deploy-storybook
```
Deploys to [Github Pages](https://dchoi87.github.io/cs-storybook/)

## Notes
* `node-sass` needs to be install as dev dependency (compatibility error otherwise)
* Using `storybook-deployer` to deploy application to Github Pages or AWS S3

## Debug
* Delete `package.lock.json` and `node_modules`
* Run `npm install`