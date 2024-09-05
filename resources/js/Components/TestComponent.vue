<script setup>
import { ref } from 'vue'
import { usePage } from '@inertiajs/vue3'
import SmallComponent from './SmallComponent.vue'
import Counter from './Counter.vue'
import EventTest from './EventTest.vue'

const page = usePage()
// const user = computed(() => page.props.auth.user)

defineProps({php_version: String})

const clicked = ref(0)

</script>
<template>
    <div class="border-2 border-blue-500 px-2 py-4">
        <h1 class="text-green-500">This is a Vue Component in Filament!!!! 🚀</h1>
        <p>PHP Version: {{ php_version }}</p>
        <!--<p v-if="user">Welcome, {{ user.name }}!</p>-->
        <!--<p v-else>Not Logged in</p>-->
        <Counter />
        <SmallComponent />
        <EventTest />

        <button @click="clicked++"
                class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Clicked {{ clicked }} times
        </button>
    </div>
</template>
