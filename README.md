# ir-logo

<!-- Badges -->

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

This is some logo work for my teams exported as React Components.

## TODO

- Republish npm package and docz site as is node:v11.4 (netlify)
  - Update node:v12,v14 - republish npm
  - Update to current docz
- Historical cleanup
  - Added history to this README
  - Move [helium-logo on gitlab](https://gitlab.com/daneroo/helium-xrobot-logo) back to github.
  - deploy is back to netlify
- Remove nested svg tag in Download for XRobot
- Refactor downloads.js
- CI, and coverage (codeclimate,coveralls,travis,circle,actions)
- Separate components, refactor
- Favicons
- Publish to vercel, gh-pages

## Usage

```bash
npm install @danero/ir-logo
```

```js
import { XRobot } from "@daneroo/ir-logo";

const MyComponent = () => (
  <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
    <XRobot />
  </div>
);
```

## Developing

```bash
npm run unit # for continuous testing

npm run dev # for live rendering of docz
```

## Publishing

We publish both the package as an es6 module, and a docz site on netlify.
_For now tests are not under CI_

### To npm

```bash
npm version patch
npm publish
```

### To netlify

This is wired up un netlify for CD.
_There is a netlyfy.toml config which account for 404 on missing routes_

Also the `.nvmrc` selects the node version for netliy build

```bash
# On commit to master branch
npm test && npm run build
# Then deploy .docz/dist
```

## Dependencies Setup

After subtle issues around babel 6/7 dependencies, I restarted with `create-react-app`. Then removed the `App`, added swapped `eslint` for standard, and added `jest` and `docz` (`mdx`).

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

## History

- 2016-05-07 PSaaS - Platform Stack as a service: This logo was for a hugo based documentation system with John O'Connor. It was originally deployed to `ir-si.com` domain
- 2017-02-03 Helium site - static html/svg (materialize.css): was deployed originally to <https://logo.he.ir-si.com/>, and then to <https://helium-logo.netlify.com/>
  - is in the root (`\`) of [this repo](https://gitlab.com/daneroo/helium-xrobot-logo)
  - will move back to github/daneroo/helium-logo
- 2018-12-12 XRobot - eXtensible Robot - Team name for LSA Work. originaly in a gatsby site in helium-logo/xrobot
- 2018-12-14 Started consolidating every thing into ir-logo (this repo) as a npm module for a react component, as well as a docz site.
