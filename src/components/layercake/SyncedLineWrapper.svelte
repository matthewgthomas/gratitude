<script>
    import { LayerCake, ScaledSvg, Html } from 'layercake';
    import { timeFormat } from 'd3-time-format';
  
    import Line from './Line.svelte';
    import Area from './Area.svelte';
    import AxisX from './AxisX.percent-range.html.svelte';
    import AxisY from './AxisY.percent-range.html.svelte';
  
    let { title, data, xKey = "x", yKey = "y", yMax = 100, stroke = "#00e047" } = $props();
    //export let xKey = 'x';
    //export let yKey = 'y';
    //export let data = [];
    //export let stroke = '#00e047';

    const formatLabelX = timeFormat('%b');
  </script>
  
  <div class="chart-wrapper">
    <b class="chart-title">{title}</b>
    <div class="chart-container">
      <LayerCake
        ssr
        percentRange
        padding={{ bottom: 20, left: 25 }}
        x={xKey}
        y={yKey}
        yDomain={[0, yMax]}
        data={data}
      >
        <Html>
          <!-- <AxisX baseline ticks=[] format={formatLabelX} tickMarks={true} /> -->
          <AxisY ticks={4} />
        </Html>
        <ScaledSvg>
          <Line {stroke} />
          <Area fill={`${stroke}10`} />
        </ScaledSvg>
      </LayerCake>
    </div>
  </div>
  
  <style>
    .chart-wrapper {
      width: 48%;
      height: 40%;
    }
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .chart-container {
      width: 100%;
      height: 80%;
    }
    .chart-title {
        margin-bottom: 0;
        text-align: left;
    }
  </style>