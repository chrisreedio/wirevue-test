<x-filament-panels::page>
    <h1>This is my custom page!</h1>
    <div id="vue-component" />
    {{--@vue('TestComponent', ['name' => 'Filament'])--}}
    <script type="text/javascript">
        // import { createApp } from 'vue'
        // import App from '/js/vue.js'
        {{--import { getComponentName } from '@js/app.js'--}}

        // createApp(App).mount('#vue-component')
        console.log(window)
        console.log(window.Livewire)
        const name = window.getComponentName()
        // console.log('Hello from Vue! Component Name:' + window.getComponentName())
        console.log(name)
    </script>
</x-filament-panels::page>
