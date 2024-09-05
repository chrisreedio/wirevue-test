<script setup>
import Knob from "primevue/knob";
import Button from "primevue/button";
import { ref } from "vue";

const value = ref(0);
</script>

<template>
    <div class="flex justify-center card">
        <Knob v-model="value" :min="-50" :max="50" />
        <Button @click="value++" icon="pi pi-plus" />
    </div>
</template>
