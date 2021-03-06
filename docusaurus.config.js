module.exports = {
  title: 'DBC | Drone de Baixo Custo',
  tagline: 'Drone de Baixo Custo',
  url: 'https://fmmMelo.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'fmmMelo', // Usually your GitHub org/user name.
  projectName: 'my-tcc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'D B C',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png ',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'home',
          label: 'Home',
          position: 'right',
        },
        {
          to: '/#description',
          activeBasePath: 'who',
          label: 'Quem somos?',
          position: 'right',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentação',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/fmmMelo/DroneDeBaixoCusto.git',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Drone de Baixo Custo        `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
