const URL = 'https://strapi.nuxtjs.org'

export default {
  target: 'static',
  ssr: true, // similar to mode: 'universal'
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: (chunk) => {
      if (chunk) {
        return `${chunk} - Strapi Module`
      }

      return 'Strapi Module'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Open Graph
      { hid: 'og:site_name', property: 'og:site_name', content: 'Strapi Module' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: URL },
      { hid: 'og:image', property: 'og:image', content: `${URL}/card.png` },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Strapi Module' },
      { hid: 'twitter:image', name: 'twitter:image', content: `${URL}/card.png` },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'The NuxtJS Framework' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#48bb78' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/categories',
    '@/plugins/i18n.client',
    '@/plugins/vue-scrollactive',
    '@/plugins/components',
    '@/plugins/menu.client'
  ],
  /*
  ** Give routes to static generation
  */
  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/'] // give the first url to start crawling
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // https://github.com/bdrtsky/nuxt-ackee
    'nuxt-ackee'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/pwa',
    '@nuxt/content'
  ],
  /*
  ** Components auto import
  ** See https://github.com/nuxt/components
  */
  components: {
    dirs: [
      { path: '@/components', pattern: '*.vue' }
    ]
  },
  /*
  ** Modules configuration
  */
  colorMode: {
    preference: 'light'
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  i18n: {
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en',
    parsePages: false,
    lazy: true,
    seo: false,
    langDir: 'i18n/'
  },
  ackee: {
    server: 'https://ackee.nuxtjs.com',
    domainId: '4370defe-04f9-4987-82d7-817b4de6b253',
    detailed: true
  }
}
