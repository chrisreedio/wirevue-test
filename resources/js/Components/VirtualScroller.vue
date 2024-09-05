<template>
    <div class="flex flex-col justify-center card">
        <h2 class="font-semibold dark:text-white">Virtual Scroller</h2>
        <VirtualScroller
            :items="items"
            :itemSize="50"
            class="border rounded border-surface-200 dark:border-surface-700"
            style="width: 200px; height: 200px"
        >
            <template v-slot:item="{ item, options }">
                <div
                    :class="[
                        'flex items-center p-2',
                        { 'bg-surface-100 dark:bg-surface-700': options.odd },
                    ]"
                    style="height: 50px"
                >
                    {{ item }}
                </div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import VirtualScroller from "primevue/virtualscroller";
import { onMounted, ref } from "vue";

const items = ref();

onMounted(() => {
    console.log("Mounted");
    items.value = Array.from({ length: 10000 }).map((_, i) => `Item #${i}`);
});
</script>
