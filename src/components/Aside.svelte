<script>
    import { fly, fade } from 'svelte/transition';
    let { children } = $props();

    let showContent = $state(false);
    let spinning = $state(false);

    // Asterisk adapted from https://www.svgrepo.com/svg/402968/asterisk?edit=true
    import Asterisk from "$lib/assets/asterisk.svg?raw";

    function onclick() {
        spinning = true;

        showContent = !showContent;

        setTimeout(() => {
            spinning = false;
        }, 1000); // Reset after animation completes
    }
</script>

<div class="collapsible-container">
    <button type="button" class="collapsible" class:spinning {onclick} aria-label="Show aside">{@html Asterisk}</button>
    {#if showContent}
        <div class="content" in:fly={{ x: -50, duration: 2000 }} out:fade>
            <p>{@render children?.()}</p>
        </div>
    {/if}
</div>

<style>
    .collapsible-container {
        margin-bottom: 1rem;
    }

     /* Style the button that is used to open and close the collapsible content */
    .collapsible {
        background-color: transparent;
        color: #444;
        cursor: pointer;
        padding: 0.5rem;
        /*width: 100%;*/
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        margin-left: -4vw;
    }

    @keyframes rotate{
        0%{
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    .spinning {
        animation: rotate 1s linear;
    }

    /* Style the collapsible content. Note: hidden by default */
    .content {
        margin-top: -3vw;
        padding: 1rem 1rem 0 1rem;
        color: var(--purple);
        /*display: none;*/
        overflow: hidden;
        background-color: #fff;
        border-left: thick solid var(--purple);
    }

    @media screen and (max-width: 980px) {
        .content {
            margin-top: inherit;
        }
    }
</style>