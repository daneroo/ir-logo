# ir-logo

<!-- Badges -->
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

This is some logo work for my teams exported as React Components.

## TODO

- Move to lerna/docusaurus
  - [Docusaurus is using lerna](https://docusaurus.io/blog/2019/12/30/docusaurus-2019-recap)
  - [Blog article pn lerna+docusaurus](https://morioh.com/p/0ce1f859accb)
  - [x] reproduce legacy site (local)
  - move master to main
  - [x] lerna init
  - [x] docusaurus for site package
    - configure / style from iris experiment
    - replace some of my pages from legacy
    - cleanup initial pages
  - extract old components from legacy and put in separate packages folder
  - remove legacy

- Republish npm package and docz site as is node:v11.4 (netlify)
  - Update node:v12
  - Update node:v14
  - Update to current docz
  - Republish npm
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

## tl;dr

```bash
lerna bootstrap
```

## Operations

- See lerna docs
- netlify for the site: actions or hooks on netlify
- npm for public packages

```bash
npm i lerna -g ## or prepend lerna commands with npx
lerna bootstrap #  optionally --hoist

npm test  # or
lerna run test

# to see verbose test output
npm run test -- --concurrency 1 --stream  # or
lerna run test --concurrency 1 --stream

# make your commits and push...

npm login # you may have to login to npm
lerna publish

# less typical
lerna version # interactive
lerna minor # [major | minor | patch | premajor | preminor | prepatch | prerelease]

lerna clean --yes # rm node_modules
```

## Creating a new package

After you create the package, add `scripts:`, `devDependencies:`, and `standrad:`
sections to `package.json`

```bash
lerna create <name> [loc]
lerna create @daneroo/ir-logo-helium ir-logo-helium
# and add common devDeps as below
```

## Adding (shared) dev dependancies

If it is a peerDependancy, add by hand, and add as a devdependancy

```bash
lerna add jest --dev
lerna add standard --dev

# single package - not shared
lerna add winston packages/logger --dev
lerna add express packages/server --dev
# then add as peerD?
```

## Initial Setup

See [my first lerna try with foundations](https://github.com/daneroo/foundations)

```bash
npx lerna init
```


## History

- 2016-05-07 PSaaS - Platform Stack as a service: This logo was for a hugo based documentation system with John O'Connor. It was originally deployed to `ir-si.com` domain
- 2017-02-03 Helium site - static html/svg (materialize.css): was deployed originally to <https://logo.he.ir-si.com/>, and then to <https://helium-logo.netlify.com/>
  - is in the root (`\`) of [this repo](https://gitlab.com/daneroo/helium-xrobot-logo)
  - will move back to github/daneroo/helium-logo
- 2018-12-12 XRobot - eXtensible Robot - Team name for LSA Work. originaly in a gatsby site in helium-logo/xrobot
- 2018-12-14 Started consolidating every thing into ir-logo (this repo) as a npm module for a react component, as well as a docz site.
- 2021-10-10 Move to lerna and docusaurus
