<script>
    import { LayerCake, ScaledSvg, Html } from 'layercake';
    import { format } from 'd3-format';
    import { scaleBand } from 'd3-scale';
  
    import Bar from '$components/layercake/Bar.svelte';
    import AxisX from '$components/layercake/AxisX.percent-range.html.svelte';
    import AxisY from '$components/layercake/AxisY.percent-range.html.svelte';
  
    // Load csv data as json using @rollup/plugin-dsv
    import dataWords from '$data/common-words.csv';
    import dataNouns from '$data/common-nouns.csv';
    import dataAdj from '$data/common-adj.csv';
    import dataVerbs from '$data/common-verbs.csv';

    const xKey = 'word';
    const yKey = 'n';

    // Clean/format the datasets
    dataWords.forEach(d => {
      d[yKey] = +d[yKey];
    });

    dataNouns.forEach(d => {
      d[yKey] = +d[yKey];
    });

    dataAdj.forEach(d => {
      d[yKey] = +d[yKey];
    });

    dataVerbs.forEach(d => {
      d[yKey] = +d[yKey];
    });

    let data = $state(dataWords);

    let activeButton = $state("words");

    function swapData(d, freq) {
      data = d;
      activeButton = freq;
      //console.log(d);
    }

    const distinct = (d, i, arr) => arr.indexOf(d) ==  i;
    let yDomain = $derived(data.map(d => d['word']).filter(distinct));
</script>

<div class="interactive-chart">
  <div class="controls">
    <button id="wordsBtn" onclick={() => swapData(dataWords, 'words')} class:active={activeButton === "words"}>All words</button>
    <button onclick={() => swapData(dataNouns, 'nouns')} id="nounsBtn" class:active={activeButton === "nouns"}>Nouns</button>
    <button onclick={() => swapData(dataAdj, 'adjectives')} id="adjBtn" class:active={activeButton === "adjectives"}>Adjectives</button>
    <button onclick={() => swapData(dataVerbs, 'verbs')} id="verbsBtn" class:active={activeButton === "verbs"}>Verbs</button>
  </div>

  <div class="chart-container">
    <p><b>Top 10 {activeButton} I use</b></p>
    <div class="the-chart-itself">
      <LayerCake
      ssr
      percentRange
      padding={{ top: 0, right: 20, bottom: 20, left: 35 }}
      x="n"
      y="word"
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
        <Bar fill="#828FD9" />
      </ScaledSvg>
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