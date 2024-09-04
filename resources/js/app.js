import './bootstrap'

import '../css/app.css'

import { createApp } from 'vue/dist/vue.esm-bundler'
import { h } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

console.log('Initializing Vue App...')

window.loadVueComponent = async function (name, props, divId) {
    const pageComponent = await resolvePageComponent(`./Components/${name}.vue`, import.meta.glob('./Components/**/*.vue'))
    createApp({
        render: () => h(pageComponent.default, {...props.value}),
    }).mount(divId)
}
