<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { browser } from "$app/environment";
	import { navigationHistory, initializeNavigationTracking, clearHistory, handleNavigation } from '$lib/stores/navigationStore';

    import Intro from "$components/Intro.svelte";

    // Components for the main storyline
    import Act1 from "$content/act1.md";
    import Act1b from "$content/act1b.md";
    import Act2 from "$content/act2.md";
    import Act3 from "$content/act3.md"
    import Act4 from "$content/act4.md"
    import Act5 from "$content/act5.md"
    import Epilogue from "$content/epilogue.md"

    // Components for themes
    import ThemeRelationships from "$content/theme-relationships.md";
    import ThemeNature from "$content/theme-nature.md";
    import ThemeFood from "$content/theme-food.md";
    import ThemeFoodStory1 from "$content/theme-food-story-1.md";
    import ThemeFoodStory2 from "$content/theme-food-story-2.md";
    import ThemeSolitude from "$content/theme-solitude.md";

    // Components for segues
    import SegueHowToBeGrateful from "$content/segue-how-to-be-grateful.md";
    import SegueHowWeWrite from "$content/segue-how-we-write.md";
    import SegueOtherWellbeing from "$content/segue-other-wellbeing-boosters.md";
    import SeguePerson from "$content/segue-what-is-a-person.md";
    import SegueWhatIsGratitude from "$content/segue-what-is-gratitude.md";
    import SegueWhenNot from "$content/segue-when-not-to-thank.md"

    import SectionButton from '$components/SectionButton.svelte';

    import routes from "$data/routes.csv";

    // Link the components to their IDs
    let gratitudeSections = [
        {id: "act1", component: Act1},
        {id: "act1b", component: Act1b},
        {id: "act2", component: Act2},
        {id: "act3", component: Act3},
        {id: "act4", component: Act4},
        {id: "act5", component: Act5},
        {id: "epilogue", component: Epilogue},
        {id: "theme-relationships", component: ThemeRelationships},
        {id: "theme-food", component: ThemeFood},
        {id: "theme-food-story-1", component: ThemeFoodStory1},
        {id: "theme-food-story-2", component: ThemeFoodStory2},
        {id: "theme-nature", component: ThemeNature},
        {id: "theme-solitude", component: ThemeSolitude},
        {id: "segue-how-to-be-grateful", component: SegueHowToBeGrateful},
        {id: "segue-how-we-write", component: SegueHowWeWrite},
        {id: "segue-other-wellbeing-boosters", component: SegueOtherWellbeing},
        {id: "segue-what-is-a-person", component: SeguePerson},
        {id: "segue-what-is-gratitude", component: SegueWhatIsGratitude},
        {id: "segue-when-not-to-thank", component: SegueWhenNot},
    ]

    let currentSection = $state("act1");
    
    // Try to set the current section from the URL search params, if set
    // let currentSectionURL = $page.url.searchParams.get('section');
    let currentSectionURL = browser && $page.url.searchParams.get('section');
    if (currentSectionURL) {
        currentSection = currentSectionURL;
    }

    let y = $state(0);  // How far down the page we are

    onMount(() => {
        initializeNavigationTracking();
        //clearHistory();
        handleNavigation(currentSection);
    });
</script>

<svelte:window bind:scrollY={y} />

{#if currentSection === "act1"}
    <Intro />
{/if}

{#each gratitudeSections as Section (Section.id)}
    {#if Section.id === currentSection}
        <Section.component />

        {#each routes as route}
            {#if route["FromSectionID"] === currentSection}
                <SectionButton changeSection={() => {
                  y = 0;
                  currentSection = route["ToSectionID"];
                  handleNavigation(currentSection);
                  console.log($navigationHistory);
                  goto(`?section=${currentSection}`);
                  }}>
                    {route["Text"]}
                </SectionButton>
                <br/>
            {/if}
        {/each}
    {/if}
{/each}
