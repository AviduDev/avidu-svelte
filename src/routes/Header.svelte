<script>
	import { page } from '$app/stores';
</script>

<header class="header">
	<nav class="nav">
		<ul class="ul">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
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
		position: fixed;
		right: 1rem;
		bottom: 5rem;
	}
</style>
