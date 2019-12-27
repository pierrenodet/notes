module.exports = {
  title: 'thesis',
  tagline: 'Manuscript and Reading Notes of my PhD',
  url: 'https://pierrenodet.github.io',
  baseUrl: '/thesis/',
  favicon: 'img/favicon.ico',
  organizationName: 'pierrenodet',
  projectName: 'thesis',
  themeConfig: {
    navbar: {
      title: 'thesis',
      logo: {
        alt: 'thesis logo',
        src: 'img/logo.png',
      },
      links: [
        { to: 'manuscript/introduction', label: 'Manuscript', position: 'right' },
        { to: 'notes', label: 'Reading Notes', position: 'right' },
        {
          href: 'https://github.com/pierrenodet/thesis',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Pierre Nodet.`,
    },
    disableDarkMode: true
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'manuscript',
          routeBasePath: 'manuscript',
          include: ['**/*.md', '**/*.mdx'],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/pierrenodet/thesis/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          path: 'notes',
          routeBasePath: 'notes',
          include: ['**/*.md', '**/*.mdx']
        },
      },
    ],
  ],
};
