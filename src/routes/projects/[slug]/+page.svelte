<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section class="project">
	<div class="projectHeader">
		<h1 class="projectTitle">{data.project.title}</h1>
	</div>

	<img src={data.project.mainImage.url} alt={data.project.title} />

	<h3 class="description">{data.project.description}</h3>

	<div class="details">
	<div class="listContainer">
			
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
	</div>

		<div class="itemContainer">
			<div class="goals item">
				<h3>Goals</h3>
				<div class="data">
					{@html data.project.goals.html}
				</div>
				
			</div>

			<hr>

			<div class="goals item">
				<h3>Problems</h3>
				<div class="data">
					{@html data.project.problems.html}
				</div>
				
			</div>

			<hr>

			<div class="goals item">
				<h3>Solutions</h3>
				<div class="data">
					{@html data.project.proposedSolution.html}
				</div>
				
			</div>

			<hr>

			<div class="goals item">
				<h3>services</h3>
				<div class="data">
					{@html data.project.providedServices.html}
				</div>
				
			</div>

			<hr>

			<div class="goals item">
				<h3>Scope</h3>
				<div class="data">
					{@html data.project.projectScope.html}
				</div>
				
			</div>

			<hr>
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
		min-height: 90vh;
	}

	.description {
		margin: 2rem 0 2rem 0;
	}

	hr {
		border: solid rgba(0, 0, 0, 0.5) 1px;
		width: 100%;
	}
	.projectTitle {
		font-size: 3rem;
	}
	img {
		border-radius: 0.5rem;
		max-width: 100%;
	}

	li {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		list-style: none;
		font-size: 1rem;
	}
	.listContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
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
		justify-content: space-between;
		margin: 1rem;
		width: 100%;
		margin: 2rem 0 2rem 0;
	}

	/* .data {
		display: flex;
		flex-direction: column;
		align-items: end;
		text-align: justify;
	} */

	img {
		object-fit: cover;
		object-position: center;
		max-width: 100%;
	}


	h3 {
		font-size: 1.7rem;
		font-weight: bold;
	}
	/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
	.projectTitle {
		font-size: 5rem;
	}
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
	.projectTitle {
		font-size: 7rem;
	}

	.item h3 {
		font-size: 3rem;
	}

	.item {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 1rem;
	}

	.data {
		display: flex;
		flex-direction: column;
		align-items: start;
		text-align: justify;
		max-width: 90%;
	}


}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
	.projectTitle {
		font-size: 8rem;
	}

	.item h3 {
		font-size: 4rem;
	}

	h3 {
		font-size: 2rem;
	}

	li, .data {
		font-size: 1.4rem;
	}

	.listContainer {
		width: 80%;
	}

}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

	.listContainer {
		margin: 4rem 0 4rem 0;
	}

	.data {
		max-width: 70%;
	}

	.projectTitle {
		font-size: 10rem;
	}

	.item h3 {
		font-size: 4rem;
	}

	h3 {
		font-size: 2rem;
	}
}
</style>
