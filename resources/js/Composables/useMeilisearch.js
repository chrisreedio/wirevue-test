import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

export function useMeilisearch() {
    function hello() {
        console.log('hello from composable')
    }


    return {
        hello,
    }
}