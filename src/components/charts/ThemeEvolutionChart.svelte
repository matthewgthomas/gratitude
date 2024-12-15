<script>
    import { timeParse, timeFormat } from 'd3-time-format';
    import SyncedLineWrapper from '$components/layercake/SyncedLineWrapper.svelte';
  
    // This example loads csv data as json using @rollup/plugin-dsv
    import pointsOne from '$data/themes-socialising.csv';
    import pointsTwo from '$data/themes-food-and-cooking.csv';
    import pointsThree from '$data/themes-solitude-and-self-care.csv';
    import pointsFour from '$data/themes-nature-and-travel.csv';

    const parseDate = timeParse('%Y-%m-%d');
  
    const xKey = 'date';
    const yKey = 'running_total';
  
    const datasets = [pointsOne, pointsTwo, pointsThree, pointsFour];
    const datasetNames = ["Socialising", "Food and cooking", "Solitude", "Nature and travel"];
  
    let yMax = 100;

    datasets.forEach(dataset => {
      dataset.forEach(d => {
        d[xKey] = typeof d[xKey] === 'string' ? parseDate(d[xKey]) : d[xKey];
        d[yKey] = +d[yKey];

        yMax = Math.max(d[yKey], yMax)
      });
    });
  
    const colors = ['#E4670B', '#792FC4', '#07C4D9', '#828FD9'];
  </script>
  
  <div class="small-multiple-container">
    {#each datasets as dataset, i}
      <SyncedLineWrapper
        data={dataset}
        {xKey}
        {yKey}
        {yMax}
        stroke={colors[i]}
        title={datasetNames[i]}
      />
    {/each}
  </div>
  
  <style>
    /*
      The wrapper div needs to have an explicit width and height in CSS.
      It can also be a flexbox child or CSS grid element.
      The point being it needs dimensions since the <LayerCake> element will
      expand to fill it.
    */
    .small-multiple-container {
      width: 100%;
      height: 400px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-evenly;
      font-family: var(--font-sans);
    }
  </style>