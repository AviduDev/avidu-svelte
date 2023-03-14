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



	/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {}
</style>
