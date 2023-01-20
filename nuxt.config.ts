export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo'],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'http://192.168.90.5/graphql'
            }
        },
    },
})
