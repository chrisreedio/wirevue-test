<?php

namespace App\Livewire;

use Livewire\Component;

class VueComponent extends Component
{
    public ?string $component = null;

    public array $props = [];

    public function render()
    {
        return view('livewire.vue-component');
    }
}
