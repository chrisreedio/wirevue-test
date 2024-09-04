<script setup>
import { computed, ref } from 'vue'
import { usePage } from '@inertiajs/vue3'
import SmallComponent from './SmallComponent.vue'

const page = usePage()
// const user = computed(() => page.props.auth.user)

defineProps({php_version: String})
const counter = ref(0)
const clicked = ref(0)
setInterval(() => {
    counter.value++
}, Math.floor(Math.random() * 1000))
</script>
<template>
    <div class="border-2 border-blue-500 my-4 px-2 py-4">
        <h1 class="text-green-500">This is a Vue Component in Filament!!!! 🚀</h1>
        <h3>Counter: {{ counter }}</h3>
        <p>PHP Version: {{ php_version }}</p>
        <!--<p v-if="user">Welcome, {{ user.name }}!</p>-->
        <!--<p v-else>Not Logged in</p>-->

        <SmallComponent />

        <button @click="clicked++"
                class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Clicked {{ clicked }} times
        </button>
    </div>
</template>
