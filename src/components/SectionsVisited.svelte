<script>
    import { navigationHistory } from '$lib/stores/navigationStore';
    import sections from "$data/sections.csv";

    // Get the names of sections the user has visited
    function getSections(objectArray, stringArray) {
        // Create a Map for O(1) lookups
        const objMap = new Map(
            objectArray.map(obj => [obj.Slug, obj])
        );

        // Remove duplicates (in case the user navigated away then back again)
        const stringSet = [...new Set(stringArray)];
        
        return stringSet
            .map(slug => objMap.get(slug))
            .filter(Boolean);
    }

    const visitedSections = getSections(sections, $navigationHistory);
</script>

<ul>
    {#each visitedSections as section}
        <li>{section.Section}</li>
    {/each}
</ul>

<style>
    ul {
        list-style: none; /* Remove list bullets */
        padding: 0;
        margin: 1.5rem 0;
    }

    li {
        padding-left: 16px;
    }

    li::before {
        content: "↪";
        padding-right: 8px;
    }
</style>