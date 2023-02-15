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
      { title: 'Component', link: '/components/wallet-provider' },
      { title: 'Hooks', link: '/hooks/use-wallet' },
      { title: 'Customize', link: '/customize/chain' },
    ],
    footer:
      'Powered by <a href="https://opensui.app" target="_blank">OpenSui</a> ©2023. All rights reserved.',
  },
});
