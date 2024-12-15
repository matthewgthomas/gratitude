<script>
    import { LayerCake, ScaledSvg, Html } from 'layercake';
    import { scaleBand } from 'd3-scale';
  
    import Bar from '$components/layercake/Bar.svelte';
    import AxisX from '$components/layercake/AxisX.percent-range.html.svelte';
    import AxisY from '$components/layercake/AxisY.percent-range.html.svelte';
  
    // This example loads csv data as json using @rollup/plugin-dsv
    import data from '$data/people-categories.csv';
  
    data.forEach(d => {
      d.n = +d.n;
    });

    const distinct = (d, i, arr) => arr.indexOf(d) ==  i;
    let yDomain = data.map(d => d['Category']).filter(distinct);
  </script>
  
  <div class="chart-container">
    <LayerCake
      ssr
      percentRange
      padding={{ top: 0, right: 20, bottom: 20, left: 35 }}
      x="n"
      y="Category"
      yScale={scaleBand().paddingInner(0.05).round(true)}
      yDomain={yDomain}
      xDomain={[0, null]}
      {data}
    >
      <Html>
        <AxisX gridlines baseline={false} snapLabels />
        <AxisY gridlines={false} tickMarks />
      </Html>
      <ScaledSvg>
        <Bar fill="#07C4D9" />
      </ScaledSvg>
    </LayerCake>
  </div>
  
  <style>
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .chart-container {
      width: 100%;
      height: 250px;
      margin-bottom: 1.5rem;
      font-family: var(--font-sans);
    }
  </style>