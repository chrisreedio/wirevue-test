<script setup>
import Tag from "primevue/tag";

console.log(window);
</script>
<template>
    <div class="flex flex-col space-y-1">
        <h2 class="font-semibold text-white">Tags</h2>
        <div class="flex flex-wrap gap-2">
            <Tag value="Primary"></Tag>
            <Tag severity="secondary" value="Secondary"></Tag>
            <Tag severity="success" value="Success"></Tag>
            <Tag severity="info" value="Info"></Tag>
            <Tag severity="warn" value="Warn"></Tag>
            <Tag severity="danger" value="Danger"></Tag>
            <Tag severity="contrast" value="Contrast"></Tag>
        </div>
    </div>
</template>
