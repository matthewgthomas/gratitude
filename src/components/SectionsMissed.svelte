<script>
    import { navigationHistory } from '$lib/stores/navigationStore';
    import sections from "$data/sections.csv";

    // Find which sections the user has missed
    function getDifference(objectArray, stringArray) {
        const stringSet = new Set(stringArray);
        return objectArray.filter(obj => !stringSet.has(obj.Slug));
    }

    const missedSections = getDifference(sections, $navigationHistory);
</script>

{#if missedSections.length}
    <p>You didn’t make it to these sections. Use the links to read them, if you desire:</p>
    <ul>
        {#each missedSections as section}
            <li><a href="/{section.Slug}">{section.Section}</a></li>
        {/each}
    </ul>
{:else}
    <p>You made it to every section!</p>
{/if}

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
        content: "↯";
        padding-right: 8px;
    }
</style>