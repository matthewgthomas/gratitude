<script>
    import { LayerCake, ScaledSvg, Html } from 'layercake';
    import { format } from 'd3-format';
    import { timeParse, timeFormat } from 'd3-time-format';
  
    import Area from '$components/layercake/Area.svelte';
    import AxisX from '$components/layercake/AxisX.percent-range.html.svelte';
    import AxisY from '$components/layercake/AxisY.percent-range.html.svelte';
    import Line from '$components/layercake/Line.svelte';
    import SharedTooltip from '$components/layercake/SharedTooltip.percent-range.html.svelte';
    // import Tooltip from '$components/layercake/Tooltip.html.svelte';
  
    // Load csv data as json using @rollup/plugin-dsv
    import dataDaily from '$data/grats-people-only-daily.csv';
    import dataWeekly from '$data/grats-people-only-weekly.csv';
    import dataMonthly from '$data/grats-people-only-monthly.csv';

    const xKey = 'date';
    const yKey = 'prop';
    const parseDate = timeParse('%Y-%m-%d');

    // Clean/format the three datasets
    dataDaily.forEach(d => {
      d[xKey] = typeof d[xKey] === 'string' ? parseDate(d[xKey]) : d[xKey];
      d[yKey] = +d[yKey];
    });

    dataWeekly.forEach(d => {
      d[xKey] = typeof d[xKey] === 'string' ? parseDate(d[xKey]) : d[xKey];
      d[yKey] = +d[yKey];
    });

    dataMonthly.forEach(d => {
      d[xKey] = typeof d[xKey] === 'string' ? parseDate(d[xKey]) : d[xKey];
      d[yKey] = +d[yKey];
    });

    let data = $state(dataWeekly);
  
    const formatLabelX = timeFormat('%b. %-d');
    const formatLabelY = d => format(`.0%`)(d);

    let activeButton = $state("Weekly");

    function swapData(d, freq) {
      data = d;
      activeButton = freq;
    }

    const r = 0.5;

    // Tooltip
    // let evt = $state();
    // let hideTooltip = $state(true);
</script>

<div class="interactive-chart">
  <div class="controls">
    <button id="dailyBtn" onclick={() => swapData(dataDaily, 'Daily')} class:active={activeButton === "Daily"}>Daily</button>
    <button id="weeklyBtn" onclick={() => swapData(dataWeekly, 'Weekly')} class:active={activeButton === "Weekly"}>Weekly</button>
    <button id="monthlyBtn" onclick={() => swapData(dataMonthly, 'Monthly')} class:active={activeButton === "Monthly"}>Monthly</button>
  </div>

  <div class="chart-container">
    <p><b>{activeButton} % of gratitudes that mention people</b></p>
    <div class="the-chart-itself">
      <LayerCake
        ssr
        percentRange
        padding={{ top: 8, right: 20, bottom: 20, left: 50 }}
        height="80%"
        x={d => d[xKey]}
        y={d => d[yKey]}
        yDomain={[0, 1]}
        {data}
      >
        <Html>
          <AxisX format={formatLabelX} tickMarks />
          <AxisY format={formatLabelY} ticks={4} />
        </Html>
        <ScaledSvg>
          <Line stroke="#792FC4" />
          <Area fille="#792FC4" />
          <!-- <Scatter {r} fill="#ab00d6" /> -->
        </ScaledSvg>
        <Html>
          <SharedTooltip formatTitle={formatLabelX} dataset={data} />
        </Html>
      </LayerCake>
    </div>
  </div>
</div>

<style>
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .interactive-chart {
      font-family: var(--font-sans);
    }
    .chart-container {
      width: 100%;
      height: 350px;
      margin-bottom: 1.5rem;
    }
    .the-chart-itself {
      height: 75%;
    }
    .controls {
        margin-bottom: 20px;
        display: flex;
        gap: 0px;
        justify-content: center;
    }
    button {
        /*padding: 8px 16px;*/
        padding: 0.5rem 1rem;
        /*border: none;*/
        font-size: 0.875rem;
        border: 2px solid #a4a4a4;
        border-radius: 0px;
        background-color: #e0e0e0;
        cursor: pointer;
        transition: background-color 0.2s;

    }
    .controls button:first-child {
      border-end-start-radius: .5rem;
      border-start-start-radius: .5rem;
    }
    .controls button:last-child {
      border-end-end-radius: .5rem;
      border-start-end-radius: .5rem;
    }
    .controls button:not(:last-child) {
      border-right: none; /* Prevent double borders */
    }
    button.active {
        background-color: var(--orange-light);
        border: 2px solid var(--orange-rust) !important;
        outline: 2px solid var(--orange-rust);
        color: white;
        font-weight: bold;
        z-index: 2;
    }
    button:hover {
        background-color: #bdbdbd;
    }
    button.active:hover {
        background-color: var(--orange-rust);
    }
</style>