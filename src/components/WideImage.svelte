<script>
    let { src, alt, caption = "", width = 100 } = $props();
</script>

<figure 
  class="full-width" 
  style:width="{width}vw"
  style:margin-left="-{width/2}vw"
  style:margin-right="-{width/2}vw"
>
    <img {src} {alt} />
    {#if caption !== ""}
        <figcaption>{@html caption}</figcaption>
    {/if}
</figure>

<style>
    .full-width {
        position: relative;
        left: 50%;
        right: 50%;
        /*margin-left: -50vw;
        margin-right: -50vw;
        width: 100vw;*/
        padding: 1.5rem 0;
        color: white;
        text-align: center;
    }

    figcaption {
        font-style: italic;
        padding: 2px;
        text-align: center;
        color: #5d5d5d;
        font-size: 1rem;
    }
</style>