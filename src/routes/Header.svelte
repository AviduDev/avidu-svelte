<script>
	import { page } from '$app/stores';
</script>

<header class="header">
	<nav class="nav">
		<ul class="ul">
			<!-- <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li> -->
			<li aria-current={$page.url.pathname.startsWith('/projects') ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/services') ? 'page' : undefined}>
				<a href="/services">Services</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	.nav {
		border: solid black 2px;
		background-color: #b8b8b8;
		position: fixed;
		/* right: 1rem; */
		bottom: 1rem;
		z-index: 10;
		border-radius: 0.5rem;
		max-width: 100%;
	}

	.nav ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		text-align: center;
	}

	li {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/* margin: 0.2rem; */
	}
</style>
