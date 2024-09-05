<x-filament-panels::page>
    <p>This is the Livewire page wrapping the Vue Components.</p>

    <div wire:ignore class="flex flex-col w-auto p-2 space-y-4">
        {{--<livewire:vue-component component="TestComponent" :props="$props" />--}}
        <!--<livewire:vue-component component="TestComponent"  />
        <livewire:vue-component component="TestStoreComponent" />
        <livewire:vue-component component="TestStoreComponent" />
        <livewire:vue-component component="TestComponent" :props="['type' => 'user']" />-->
     
        <livewire:vue-component component="VirtualScroller" />
        <livewire:vue-component component="Chart" />
        <livewire:vue-component component="Tags" />
        {{--<hr />--}}
        {{--<livewire:vue-component component="TestComponent" :props="$props" />--}}
    </div>
</x-filament-panels::page>
