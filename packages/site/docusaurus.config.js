// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Team Logos',
  tagline: "Lookin' Good, Feelin' Good",
  url: 'https://ir-logo.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'irdeto', // Usually your GitHub org/user name.
  projectName: 'ir-logo-site', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // TODO(daneroo): Should point to the root of the website directory in the repo
          editUrl: 'https://github.com/daneroo/ir-logo'
        },
        blog: {
          showReadingTime: true,
          // TODO(daneroo): Should point to the blog directory in the repo
          editUrl: 'https://github.com/daneroo/ir-logo'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // style: 'primary',
        style: 'dark', // because of our navbar background
        title: 'Team Logos',
        logo: {
          alt: 'Irdeto Logo',
          // src: 'img/irdeto_logo_rgb-purple.png',
          src: 'img/irdeto_logo_rgb-white.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs'
          },
          // Blog just hidden in nav bar for now
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/daneroo/ir-logo',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/daneroo'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Team Logos. Built with Docusaurus and Lerna.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'top'
      }
    })
}

module.exports = config
