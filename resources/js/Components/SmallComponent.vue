<script setup>
import { ref } from "vue";

function notify() {
    const notification = new window.FilamentNotification()
        .title(`Hello Filament Notification from Vue`)
        .success()
        .send();
}
const clicked = ref(0);
</script>
<template>
    <div class="flex space-x-2">
        <h4 class="px-2 py-2 text-red-500 border-2 border-green-500">
            Small Component
        </h4>
        <button
            @click="notify"
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
            Filament Notification
        </button>
    </div>
</template>
