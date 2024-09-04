import './bootstrap'

import '../css/app.css'

import { createApp } from 'vue/dist/vue.esm-bundler'
import { h, ref } from 'vue'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

console.log('Initializing Vue App...')

const name = 'TestComponent'
const pageComponent = await resolvePageComponent(`./Components/${name}.vue`, import.meta.glob('./Components/**/*.vue'))
createApp(pageComponent.default).mount('#vue-component')
