import {
    // MeiliSearch,
    instantMeiliSearch,
    type InstantMeiliSearchInstance,
    type InstantMeiliSearchObject,
} from "@meilisearch/instant-meilisearch";

import { ofetch } from "ofetch";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
    // Internal State
    //const client = useSanctumClient();
    //const toast = useToast();
    //const config = useRuntimeConfig().public.meilisearch;

    // Base URL for Meilisearch we should load this from env
    const baseUrl = "base url here";

    //
    const indexName = ref<string>("index name");
    // Current granted search key
    const key = ref<string | null>(null);

    const searchClient = ref<InstantMeiliSearchInstance | null>(null);
    // const searchClient = ref<InstantMeiliSearchObject | null>(null)

    async function getSearchKey() {
        /*const { data, error } = await useAsyncData('searchKey', () =>
            //client(`/search/keys`)
            await $fetch(`/api/keys`)
        )*/

        const { data, error } = await ofetch(`/api/keys`);

        if (error.value) {
            const notification = new window.FilamentNotification()
                .title("Backend Error!")
                .body(error.value.message)
                .error()
                .send();

            console.error("Search key error!", error);
            return null;
        }

        if (!data.value.searchKey) {
            console.error("No search key returned by backend!");
            return null;
        }

        key.value = data.value.searchKey;
        // console.log('Search key:', key.value)

        return data.value;
    }

    async function initialize() {
        if (!key.value) {
            await getSearchKey();
            if (!key.value) {
                console.error("No search key!");
                return;
            }
        }

        // ! TODO - REMOVE ME
        // console.log('Initializing with Search key', key.value)

        // searchClient = instantMeiliSearch(config.baseUrl, config.searchApiKey, {
        // const something = instantMeiliSearch(config.baseUrl, key.value, {
        //     keepZeroFacets: true,
        // })

        // console.log('Something:', something)

        function loadKey(): string {
            // console.log('Loading key...')
            return key.value ?? "";
        }

        // searchClient.value = instantMeiliSearch(config.baseUrl, key.value, {
        searchClient.value = instantMeiliSearch(baseUrl, loadKey, {
            keepZeroFacets: true,
        }).searchClient;

        searchClient.value = patchClient(searchClient.value);
        // Patch the search function
    }

    function patchClient(
        client: InstantMeiliSearchInstance
    ): InstantMeiliSearchInstance {
        return {
            ...client,
            // @ts-ignore
            async search(...args) {
                try {
                    return await client.search(...args);
                } catch (error: any) {
                    console.error("CAUGHT Meilisearch Error: ", error);
                    if (error.httpStatus === 401) {
                        console.error(
                            "Meilisearch Client is not authenticated."
                        );
                    } else if (error.httpStatus === 403) {
                        console.error("Meilisearch API Key is not authorized.");
                    } else {
                        console.error("Unknown Meilisearch Error: ", error);
                    }
                    // console.warn('Search key was rejected. Attempting to fetch new search key...')
                    try {
                        window.location.reload();

                        // searchClient = getClient()
                        // return await searchClient.search(...args)
                    } catch (error: any) {
                        console.log("FATAL:", error);
                    }
                }
            },
        };
    }

    return {
        searchClient,
        key,
        indexName,

        getSearchKey,
        initialize,
    };
});
