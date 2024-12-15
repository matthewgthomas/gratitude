<script>
	import '../app.css';
	
	let { children } = $props();
</script>

<svelte:head>
    <title>Burn After Burning: A story about gratitude, by Matthew Gwynfryn Thomas</title>
</svelte:head>

<main>
	{@render children()}
</main>
  
<style>
	main {
	  max-width: 50%;
	  margin: 0 auto;
	  padding: 6rem 20px 20px 20px;
	  font-size: 1.3rem;
	}
  
	@media screen and (max-width: 980px) {
	  main {
		margin: auto;
		padding: 10% 0px;
		max-width: 90%;
		font-size: 1.1rem;
	  }
	}
</style>