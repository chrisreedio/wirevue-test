<div>
    <div id="wirevue-{{ $component_id }}" class="m-2" />

    {{--@vue('TestComponent', ['name' => 'Filament'])--}}

    {{--    @script--}}
    {{--    <script>--}}
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function () {
            window.loadVueComponent(
                '{{ $component }}',
                {!! json_encode(array_merge($page, $props), JSON_UNESCAPED_SLASHES) !!},
                '#wirevue-{{ $component_id }}')
        })
    </script>
    {{--    @endscript--}}
</div>
