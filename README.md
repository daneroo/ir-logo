# ir-logo

<!-- Badges -->
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

This is some logo work for my teams exported as React Components

## Todo

- Remove nested svg tag in Download for XRobot
- Refactor downloads.js
- CI, and coverage (codeclimate,coveralls,travis,circle,actions)
- Separate components, refactor
- Favicons
- Publish to now, gh-pages

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
npm run unit # for continuous testing

npm run dev # for live rendering of docz
```

## Publishing

We publish both the package as an es6 module, and a docz site on netlify.
_For now tests are not under CI_

## To npm

```bash
npm version patch
npm publish
```

## To netlify

This is wired up un netlify for CD.
_There is a netlyfy.toml config which account for 404 on missing routes_

Also the `.nvmrc` selects the node version for netliy build

```bash
# On commit to master branch
npm test && npm run build
# Then deploy .docz/dist
```

## Dependencies Setup

After subtle issues around babrl 6/7 dependencies, I restarted with `create-react-app`. Then removed the `App`, added swapped `eslint` for standard, and added `jest` and `docz` (`mdx`).

```bash
# Standard for linting 
npm i --save-dev standard

# Jest
npm i --save-dev jest react-test-renderer

# docz
npm i --save-dev docz docz-theme-default docz-plugin-svgr
```

### `package.json` config for linting:

```js
  "standard": {
    "env": {
      "jest": true
    }
  }
```

### `doczsrc.js` config for docz/mdx

- Override title, description.
- Create initial top level `docs.mdx`