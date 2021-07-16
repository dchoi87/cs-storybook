# CS Storybook

## Requirements

Placeholder

## Installation

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

**Deployment**
```
npm run deploy-storybook
```
*Note: Will automatically build first then deploy*

## Dev Notes
* `node-sass` needs to be install as dev dependency (compatibility error otherwise)
* Using [storybook-deployer](https://github.com/storybookjs/storybook-deployer) to deploy application to Github Pages or AWS S3

## Debug
* `rm -rf package.lock.json node_modules`
* `npm install`