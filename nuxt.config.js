import config from './assets/config'

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: config.meta.title,
        htmlAttrs: {
            lang: config.htmlLang
        },
        meta: [
            { charset: config.metaCharset },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: config.meta.description },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '/css/bootstrap.min.css' }
        ],
        script: [
            { src: '/js/bootstrap.bundle.min.js', type: "text/javascript" }
        ],
    },



    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/google-fonts',
        '@nuxt/image',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    image: {
        staticFilename: '[publicPath]/images/thumbs/[name]-[hash][ext]',
        provider: 'static',
        presets: {
            default: {
                modifiers: {
                    format: 'webp',
                    quality: 80,
                }
            },
            categoryThumbnail: {
                modifiers: {
                    format: 'webp',
                    quality: 80,
                }
            },
            videoThumbnail: {
                modifiers: {
                    format: 'webp',
                    quality: 80
                }
            },
            logo: {
                modifiers: {
                    format: 'webp',
                    quality: 80
                }
            },
        }
    },

    googleFonts: {
        families: {
            Oswald: true,
            // 'Josefin+Sans': true,
            // Lato: [100, 300],
            // Raleway: {
            //     wght: [100, 400],
            //     ital: [100]
            // },
        }
    },
    router: {
        trailingSlash: true
    },

    generate: {
        dir: 'docs/',
        fallback: '404.html'
    }
}