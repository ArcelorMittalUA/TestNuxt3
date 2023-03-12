export default defineNuxtConfig({
    app: {
        head: {
            title: 'ArcelorMittal',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
        }
    },
    modules: [
        '@nuxtjs/apollo',
        '@nuxtjs/i18n',
        '@nuxt/image-edge',
        '@nuxtjs/device',
        'nuxt-swiper',
    ],
    i18n: {
        defaultLocale: 'uk',
        //skipSettingLocaleOnNavigate: true,
        //lazy: true,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected'
          },
        langDir: 'lang',
        baseUrl: 'https://ukraine.arcelormittal.com',
        locales: [
            {
                code: 'uk',
                name: 'Ukraine',
                iso: 'uk-UA',
                file: 'uk-UA.json'
            },
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
                file: 'en-US.json'
            },
        ],
    },
    apollo: {
        autoImports: true,
        authType: 'Bearer',
        authHeader: 'Authorization',
        tokenStorage: 'cookie',
        clients: {
            default: {
                httpEndpoint: 'https://ukraine-api.arcelormittal.com/index.php?graphql',
            }
        },
        other: './graphql/config/config.ts'
    },
    image: {
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
          '2xl': 1536
        },
        domains: ['ukraine-api.arcelormittal.com'],
        staticFilename: '[publicPath]/images/[name]-[hash][ext]',
        dir: 'public/images',
        alias: {
            static: 'ukraine-api.arcelormittal.com'
          }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_colors.scss"  as *;  @use "@/assets/_variables.scss"  as *;',
                }
            }
        }
    },
    css: ["assets/main.scss"],
})
