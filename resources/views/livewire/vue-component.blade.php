<div>
    <div id="vue-component" />

    {{--@vue('TestComponent', ['name' => 'Filament'])--}}

    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function () {
            window.loadVueComponent('{{ $component }}', {!! json_encode($props, JSON_UNESCAPED_SLASHES) !!}, '#vue-component')
        })
    </script>
</div>
