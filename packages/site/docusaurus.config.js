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

  // added this to get Material Icon Font
  stylesheets: ['https://fonts.googleapis.com/icon?family=Material+Icons'],

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
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
        // Need Material Icon Font in stylesheet section above
        switchConfig: {
          darkIcon: 'light_mode',
          darkIconStyle: {
            fontFamily: 'Material Icons'
          },
          lightIcon: 'dark_mode',
          lightIconStyle: {
            color: 'white', // for better contrast
            fontFamily: 'Material Icons'
          }
        }
      },

      navbar: {
        title: 'Team Logos',
        logo: {
          alt: 'Irdeto Logo',
          src: 'img/irdeto-logo-purple.svg',
          srcDark: 'img/irdeto-logo-white.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs'
          },
          { to: '/blog', label: 'News', position: 'left' },
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
