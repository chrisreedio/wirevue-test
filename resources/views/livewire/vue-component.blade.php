<div>
    <div id="vue-component" />

    {{--@vue('TestComponent', ['name' => 'Filament'])--}}

    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function () {
            window.loadVueComponent('TestComponent', {
                name: 'Filament',
            }, '#vue-component')
        })
    </script>
</div>
