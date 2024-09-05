<script setup>
import { ref } from "vue";
import { usePage } from "@inertiajs/vue3";
import EventTest from "./EventTest.vue";
import SmallComponent from "./SmallComponent.vue";
import Counter from "./Counter.vue";

import { useCounterStore } from "../Stores/Counter";
import { storeToRefs } from "pinia";

const page = usePage();
// const user = computed(() => page.props.auth.user)

defineProps({ php_version: String });

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const { increment } = counterStore;
</script>
<template>
    <div class="px-2 py-4 border-2 border-blue-500">
        <h1 class="text-green-500">
            This is a Vue Component in Filament!!!! 🚀 using Pinia🍍
        </h1>
        <button
            @click="increment"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
            Clicked {{ count }} times
        </button>
    </div>
</template>
