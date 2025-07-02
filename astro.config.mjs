// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    devToolbar:{
        enabled: false
    },

    vite: {
        server:{
            allowedHosts: [
                'dj34w9-ip-190-153-6-203.tunnelmole.net'
            ]
        }
    },


    output: 'server'
});
