<script setup>
import { computed, ref } from 'vue'
import { usePage } from '@inertiajs/vue3'

const page = usePage()
// const user = computed(() => page.props.auth.user)

defineProps({php_version: String})
const counter = ref(0)
const clicked = ref(0)
setInterval(() => {
    counter.value++
}, 1000)
</script>
<template>
    <div>
        <h1 class="text-green-500">This is a Vue page powered by Inertia.js in Filament!!!! 🚀</h1>
        <h3>Counter: {{ counter }}</h3>
        <!--<p v-if="user">Welcome, {{ user.name }}!</p>-->
        <!--<p v-else>Not Logged in</p>-->

        <button @click="clicked++">Clicked {{ clicked }} times</button>
        <hr>
        <p>PHP Version: {{ php_version }}</p>

    </div>
</template>
