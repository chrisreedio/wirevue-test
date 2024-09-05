<x-filament-panels::page>
    <p>This is the Livewire page wrapping the Vue Components.</p>

    <div class="flex flex-row w-full border border-red-500 p-4 space-y-2 space-2">
        {{--<livewire:vue-component component="TestComponent" :props="$props" />--}}
        <livewire:vue-component component="TestComponent" />
        <livewire:vue-component component="TestComponent" :props="['type' => 'user']" />
        {{--<hr />--}}
        {{--<livewire:vue-component component="TestComponent" :props="$props" />--}}
    </div>
</x-filament-panels::page>
