<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="project">
	<img src={data.project.mainImage.url} alt={data.project.mainImage.id} />
	<!-- <div class="wrapper">{@html data.post.content.text}</div> -->
	<h1 class="projectTitle">{data.project.title}</h1>
</div>
<section />

<style>

	.projectTitle {
		font-size: 2rem;
	}
    img {
        max-width: 100%;
    }
</style>
