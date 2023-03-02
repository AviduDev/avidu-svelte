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
		<p>Website by Myself</p>
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
	}

	main {
		position: relative;
		display: flex;
		flex-direction: column;
	}
</style>
