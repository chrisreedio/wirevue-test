<x-filament-panels::page>
    <h1>This is my custom page!</h1>
    <div id="vue-component" />

    {{--@vue('TestComponent', ['name' => 'Filament'])--}}

    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function () {
            window.loadVueComponent('TestComponent', {
                name: 'Filament',
            }, '#vue-component')
        })
    </script>
</x-filament-panels::page>
