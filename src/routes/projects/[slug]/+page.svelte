<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section class="project">
	<div class="projectHeader">
		<img src={data.project.mainImage.url} alt={data.project.mainImage.id} />
		<h1 class="projectTitle">{data.project.title}</h1>
	</div>

	<h3>{data.project.description}</h3>

	<div class="details">
		<hr />
		<li>Type:<span class="bold">{data.project.type}</span></li>
		<hr />
		<li>Company:<span class="bold">{data.project.company}</span></li>
		<hr />
		<li>Collaboration:<span class="bold">{data.project.collaboration}</span></li>
		<hr />
		<li>Date:<span class="bold">{data.project.year}</span></li>
		<hr />
		<li>
			Design:<span class="bold"><a href={data.project.design} target="blank">Behance</a></span>
		</li>
		<hr />
		<li>
			Source Code:<span class="bold"
				><a href={data.project.sourceUrl} target="blank">GitHub</a></span
			>
		</li>
		<hr />
		<li>
			Live Site:<span class="bold"><a href={data.project.liveSite} target="blank">Open</a></span>
		</li>
		<hr />

		<div class="itemContainer">
			<div class="goals item">
				<h3>Goals</h3>
				{@html data.project.goals.html}
			</div>

			<div class="goals item">
				<h3>Problems</h3>
				{@html data.project.problems.html}
			</div>

			<div class="goals item">
				<h3>Solutions</h3>
				{@html data.project.proposedSolution.html}
			</div>

			<div class="goals item">
				<h3>services</h3>
				{@html data.project.providedServices.html}
			</div>

			<div class="goals item">
				<h3>Scope</h3>
				{@html data.project.projectScope.html}
			</div>
			<!-- 
					{#each project.tags as tag}
						<p class="projectTag">{tag}</p>
					{/each}
			 -->
			<div class="images">
				 <!-- {#if data.project.gallery.url}
					{#each data.project.gallery.url as images}
					<li>
						<img src={data.project.gallery.url} alt="">
					</li>
					{/each}
				 {/if} -->
<!-- 				 
				 {@html data.project.images.html} -->

				 <div
				 dangerouslySetInnerHTML={{__html: data.project.images.html}}
			   />
			</div>

		</div>
	</div>
</section>

<style>
	.projectHeader {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
	}

	hr {
		border: solid black 1px;
		width: 100%;
	}
	.projectTitle {
		font-size: 3rem;
	}
	img {
		max-width: 100%;
	}

	li {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		list-style: none;
	}
	.details {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.itemContainer {
		width: 100%;
	}
	.item {
		display: flex;
		flex-direction: column;
		margin: 1rem;
		width: 100%;
	}

	img {
		object-fit: cover;
		object-position: center;
		max-width: 100%;
	}
</style>
