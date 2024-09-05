import { computed, ref } from "vue";

import { defineStore } from "pinia";

export const useCounterStore = defineStore(
    "counter",
    () => {
        const count = ref<number>(0);
        const name = ref<string>("Eduardo");
        const doubleCount = computed(() => count.value * 2);
        function increment() {
            count.value++;
        }

        return { count, name, doubleCount, increment };
    },
    {
        persist: true,
    }
);
