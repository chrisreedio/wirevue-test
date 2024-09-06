<script setup lang="ts">
import {
    AisInstantSearch,
    AisHits,
    AisInfiniteHits,
    AisSearchBox,
    AisPagination,
    AisConfigure,
    AisClearRefinements,
    //@ts-ignore
} from "vue-instantsearch/vue3/es";

import { useSearchStore } from "../Stores/Search";
import { storeToRefs } from "pinia";
import { useMeiliSearch } from "../Composables/useMeilisearch";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional

const { customSearchFn: searchFn } = useMeiliSearch();
const { searchClient, indexName } = storeToRefs(useSearchStore());
</script>

<template>
    <ais-instant-search
        v-if="searchClient"
        :searchClient="searchClient"
        :index-name="indexName"
        :search-function="searchFn"
    >
        <ais-configure />

        <div class="flex flex-col">
            <ais-search-box
                placeholder="ex. John Doe"
                class="relative"
            ></ais-search-box>

            <ais-hits>
                <template v-slot="{ items }">
                    <DataTable :value="items" stripedRows>
                        <!-- Columns for each field here if we need to customize a field we can use the slots
                         <Column field="name" header="Name"></Column>
                        -->
                    </DataTable>
                </template>
            </ais-hits>
        </div>
    </ais-instant-search>
</template>
