<!--
  @component
  Generates an SVG bar chart.
 -->
 <script>
    import { getContext } from 'svelte';
  
    const { data, xGet, yGet, xScale, yScale } = getContext('LayerCake');
  
    /** @type {String} [fill='#00bbff'] - The shape's fill color. This is technically optional because it comes with a default value but you'll likely want to replace it with your own color. */
    // export let fill = '#00bbff';
    let { fill = "#00bbff", outline = "white" } = $props();
  </script>
  
  <g class="bar-group">
    {#each $data as d, i}
      <rect
        class="group-rect"
        data-id={i}
        x={$xScale.range()[0]}
        y={$yGet(d)}
        height={$yScale.bandwidth()}
        width={$xGet(d)}
        style="fill:{fill};stroke-width:1;stroke:{outline}"
      ></rect>
    {/each}
  </g>