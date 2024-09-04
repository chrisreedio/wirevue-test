<script setup>
import { ref } from 'vue'

const counter = ref(0)
setInterval(() => {
    counter.value++
}, 1000)
</script>
<template>
    <div>
        <h1>This is a Vue page powered by Inertia.js!</h1>
        <h3>Counter: {{ counter }}</h3>
    </div>
</template>
