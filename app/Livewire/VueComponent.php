<?php

namespace App\Livewire;

use Illuminate\Support\Str;
use Livewire\Component;

class VueComponent extends Component
{
    public ?string $component = null;

    public array $props = [];

    public function render()
    {
        return view('livewire.vue-component', [
            'component_id' => Str::random(8),
        ]);
    }
}
