<script setup>
import { onMounted, ref } from 'vue'

const externalMessage = ref('No message yet')

const updateMessage = (event) => {
    externalMessage.value = event.detail
}

onMounted(() => {
    // Listen for the custom event
    window.addEventListener('laravel-message', updateMessage)
})

</script>
<template>
    <div class="bold border-2 border-green-500 px-2 py-2">
        <h1>Event Test</h1>
        <p>External Message: '{{ externalMessage }}'</p>
    </div>
</template>
