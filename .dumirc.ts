import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  themeConfig: {
    name: '',
    logo: '/logo.svg',
    favicons: ['/favicon.ico'],
    title: 'OpenSui Kit',
    nav: [
      { title: 'Guide', link: '/guide' },
      { title: 'Tutorials', link: '/tutorial/configure-chain' },
      { title: 'Component', link: '/components/connect-button' },
      { title: 'Hooks', link: '/hooks/use-account-balance' },
      { title: 'Styling', link: '/styling/basic' },
      { title: 'Types', link: '/types' },
    ],
    footer:
      'Powered by <a href="https://opensui.app" target="_blank">OpenSui</a> 2023',
  },
});
