<div>
    <div id="wirevue-{{ $component_id }}" />

    {{--@vue('TestComponent', ['name' => 'Filament'])--}}

    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function () {
            window.loadVueComponent(
                '{{ $component }}',
                {!! json_encode($props, JSON_UNESCAPED_SLASHES) !!},
                '#wirevue-{{ $component_id }}')
        })
    </script>
</div>
