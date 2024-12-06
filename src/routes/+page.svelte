<script>
    import Intro from "$components/Intro.svelte";

    import TestSection1 from "$components/TestSection1.svelte";
    import TestSection2 from "$components/TestSection2.svelte";

    let gratitudeSections = [
        {id: "section1", component: TestSection1},
        {id: "section2", component: TestSection2}
    ]

    let routes = [

    ];

    let currentSection = $state("section1");
</script>

<Intro />

<main>
    <p>Current section: {currentSection}</p>

    {#each gratitudeSections as Section (Section.id)}
        {#if Section.id === currentSection}
            <Section.component />

            <button onclick={() => {currentSection = "section2"}}>
                Section 2
            </button>
        {/if}
    {/each}
</main>

<style>
    main {
      max-width: 50%;
      margin: 0 auto;
      padding: 6rem 20px 20px 20px;
      font-family: Arial, sans-serif;
      font-size: 1.3rem;
      color: #333;
    }

    @media screen and (max-width: 980px) {
        main {
            margin: auto;
            padding: 10% 0px;
            max-width: 90%;
            font-size: 1.1rem;
        }
    }

    button {
      display: block;
      padding: 10px 20px;
      width: 100%;
      font-size: 16px;
      cursor: pointer;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #45a049;
    }
</style>