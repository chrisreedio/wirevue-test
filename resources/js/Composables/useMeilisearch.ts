import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

export function useMeiliSearch() {
    function customSearchFn(helper: any) {
        // If we need to do any pre-search configuration, we can do it here

        helper.search();
    }

    return {
        customSearchFn,
    };
}
