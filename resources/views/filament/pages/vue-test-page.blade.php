@php
$props = [
    'name' => 'John Doe',
    'php_version' => phpversion(),
];
@endphp
<x-filament-panels::page>
    <h1>This is my custom page!</h1>

    <livewire:vue-component component="TestComponent" :props="$props" />
</x-filament-panels::page>
