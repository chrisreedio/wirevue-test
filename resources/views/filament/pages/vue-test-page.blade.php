@php
    $props = [
        'name' => 'John Doe',
        'php_version' => phpversion(),
    ];
@endphp
<x-filament-panels::page>
    <p>This is the Livewire page wrapping the Vue Components.</p>

    <livewire:vue-component component="TestComponent" :props="$props" />
    <livewire:vue-component component="TestComponent" :props="$props" />
</x-filament-panels::page>
