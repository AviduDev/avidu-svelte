<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section>
    <h1 class="title">{data.service.serviceTitle}</h1>
	<hr>
	<p class="description">{data.service.serviceDescription}</p>
	<h2 class="serviceTitle">related services</h2>
	<hr>
	<div>
		{@html data.service.relatedServices.html}
	</div>
	<h2 class="serviceTitle">related tools</h2>
	<hr>
	<div>
		{@html data.service.relatedTools.html}
	</div>
</section>

<style>
	hr {
		border: solid 1px black;
	}

	.description {
		/* max-width: 70%; */
		text-align: justify;
	}

	.serviceTitle {
		margin: 4rem 0 0 0;
	}
</style>
