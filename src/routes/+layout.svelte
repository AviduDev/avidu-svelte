<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app" id="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>AVIDU©2023</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		max-width: 100vw;
		position: relative;
		background-color: #b8b8b8;
		overflow: hidden;
		border-radius: 0.5rem;
		padding: 0.5rem;
		position: relative;
		justify-content: center;
		align-items: center;
	}

	main {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	footer p {
		/* margin: 2rem 0 2rem 0; */
		font-weight: bolder;
		font-size: 5rem;
		text-align: center;
	}
</style>
