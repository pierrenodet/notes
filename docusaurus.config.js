const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'notes',
  tagline: 'Reading Notes of my PhD',
  url: 'https://pierrenodet.github.io/notes',
  baseUrl: '/notes/',
  favicon: 'img/favicon.ico',
  organizationName: 'pierrenodet',
  projectName: 'notes',
  themeConfig: {
    navbar: {
      title: 'notes',
      items: [
        { href: 'https://github.com/pierrenodet/notes', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Pierre Nodet.`,
    },
    colorMode: {
      disableSwitch: true
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          path: './notes',
          routeBasePath: '/',
          blogTitle: 'WSL Reading Notes',
          blogDescription: 'Reading Notes of PhD Candidate in Weakly Supervised Learning',
          include: ['**/*.md', '**/*.mdx'],
          editUrl:
            'https://github.com/pierrenodet/notes/edit/master',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Pierre Nodet.`,
          },
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
      },
    ],
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css',
  ],
};
