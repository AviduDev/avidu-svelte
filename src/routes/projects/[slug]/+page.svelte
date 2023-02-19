<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="project">
	<h1>{data.project.title}</h1>
	<img src={data.project.mainImage.url} alt={data.project.mainImage.id} />
	<!-- <div class="wrapper">{@html data.post.content.text}</div> -->
</div>
<section />

<style>
    img {
        max-width: 100%;
    }
</style>
