import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "laigma",
  description: "Luis Iglesias - Software Engineer",
  appearance: "dark",

  head: [
    // Google Analytics
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-GY8NDR4Y28' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-GY8NDR4Y28');"
    ],

    // Open Graph
    ['meta', { property: 'og:title', content: 'Luis Iglesias - FullStack Developer' }],
    ['meta', { property: 'og:description', content: `@laigma's Portfolio/Blog, where I share my projects and experience.` }],
    ['meta', { property: 'og:image', content: 'https://laigma.github.io/logos/lp-portfolio-og.webp' }],
    ['meta', { property: 'og:url', content: 'https://laigma.github.io' }],

    // Meta tags
    ['meta', { name: 'translate', content: 'no' }],
    ['link', { rel: 'icon', href: '/logos/lp-dark.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logos/lp-logo.png',
    siteTitle: false, //"@laigma - Luis Iglesias",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Projects', link: '/projects' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/laigma' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/luisigma/' },
      {
        icon:
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M503.5 204.6L502.8 202.8L433.1 21C431.7 17.5 429.2 14.4 425.9 12.4C423.5 10.8 420.8 9.9 417.9 9.6C415 9.3 412.2 9.7 409.5 10.7C406.8 11.7 404.4 13.3 402.4 15.5C400.5 17.6 399.1 20.1 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.1 111.5 17.6 109.6 15.5C107.6 13.4 105.2 11.7 102.5 10.7C99.9 9.7 97 9.3 94.1 9.6C91.3 9.9 88.5 10.8 86.1 12.4C82.8 14.4 80.3 17.5 78.9 21L9.3 202.8L8.5 204.6C-1.5 230.8-2.7 259.6 5 286.6C12.8 313.5 29.1 337.3 51.5 354.2L51.7 354.4L52.3 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z"/></svg>`
        },
        link: 'https://gitlab.com/laigma-public'
      }
    ]
  },
})
