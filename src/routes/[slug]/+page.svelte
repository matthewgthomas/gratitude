<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import { afterNavigate, goto } from '$app/navigation';
    import SectionButton from '$components/SectionButton.svelte';
    
    let { data } = $props();
    let component = $state();
  
    onMount(async () => {
        afterNavigate(async (navigation) => {
            const module = await import(/* @vite-ignore */ data.componentPath);
            component = module.default;
        });
    });
    
    function changeSection(toSection) {
      goto(`/${toSection}`, { replaceState: false });
    }
</script>
  
<div transition:fade>
    <svelte:component this={component} />
    
    {#each data.routes as route}
      <SectionButton changeSection={() => changeSection(route.ToSectionID)}>
        {route.Text}
      </SectionButton>
      <br/>
    {/each}
</div>