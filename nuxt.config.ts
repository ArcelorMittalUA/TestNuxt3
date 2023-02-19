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
    ssr: true,
    modules: [
        '@nuxtjs/apollo',
        '@nuxtjs/i18n',
        '@nuxt/image-edge',
        '@nuxtjs/device',
    ],
    apollo: {
        autoImports: true,
        authType: 'Bearer',
        authHeader: 'Authorization',
        tokenStorage: 'cookie',
        clients: {
            default: {
                tokenName: "github-token",
                httpEndpoint: 'https://ukraine-api.arcelormittal.com.ua/index.php?graphql',
            }
        },
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
