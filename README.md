# ir-logo

This is some logo work for my teams exported as React Components

## Usage

```bash
npm install @danero/ir-logo
```

```js
import { XRobot } from '@daneroo/ir-logo'

const MyComponent = () => (
  <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    <XRobot />
  </div>
)
```

## Developing

```bash
npm run test -- --watch # for continuous testing

npm run dev # for live rendering of docz

```

## Publishing

```bash
# npm
npm version patch
npm publish

# docz
npm run docs
# TODO now/github/netlify: publish .docz/dist directory
```

## Dependencies Setup

To get Jest to work with docz, I had to use

```bash
# Jest
npm i --save-dev @babel/core @babel/preset-env @babel/preset-react babel-core@7.0.0-bridge.0 babel-jest jest react-test-renderer

# docz
npm i --save-dev docz docz-theme-default

# react
npm i --save-dev prop-types react react-dom

# for linting
npm i --save-dev standard
```

Also had to use the following `.babelrc`:

```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

