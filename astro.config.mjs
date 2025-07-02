// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({

    devToolbar:{
        enabled: false
    },
    output: 'server',
    adapter: netlify(),
    site: 'https://rincondelospostres.netlify.app'

});
