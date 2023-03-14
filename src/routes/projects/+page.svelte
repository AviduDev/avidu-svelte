<script>
	import { each } from 'svelte/internal';

	/** @type {import('./$types').PageData} */
	export let data;
	let first = 3;
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />

	<title>Website Designer and Frontend Developer from Sri Lanka</title>
	<meta name="description" content="Avidu is a good website designer from sri lanka" />
	<meta name="keywords" content="Web Design, Web Development, Frontend Development" />
	<meta name="author" content="Avidu Sampath" />

	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://res.cloudinary.com/avidu/image/upload/v1672635670/1JxxrWlPeEgNUPLtiQbSG8eGiGea8ijJb_u8vibc.png"
	/>
	<meta property="og:title" content="Website Designer and Frontend Developer from Sri Lanka" />
	<meta property="og:description" content="Avidu is a good website designer from sri lanka" />
	<meta name="og:url" content="https://avidu.me" />
	<meta property="og:locale" content="es_ES" />
	<meta property="og:url" content="https://avidu.me" />

	<meta name="twitter:title" content="Website Designer and Frontend Developer from Sri Lanka" />
	<meta name="twitter:description" content="Avidu is a good website designer from sri lanka" />
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/avidu/image/upload/v1672635670/1JxxrWlPeEgNUPLtiQbSG8eGiGea8ijJb_u8vibc.png"
	/>
	<meta name="twitter:domain" content="https://avidu.me" />
	<meta name="twitter:card" content="summary_large_image" />

	{@html `<script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "website",
              "name": "Website Designer and Frontend Developer from Sri Lanka",
              "description": "Avidu is a good website designer from sri lanka",
              "image": "https://res.cloudinary.com/avidu/image/upload/v1672635670/1JxxrWlPeEgNUPLtiQbSG8eGiGea8ijJb_u8vibc.png"
              "url": "https://avidu.me",
              "author" : {
                "@type" : "Person",
                "name" : "Avidu Sampath"
            },
            }
    </script>`}
</svelte:head>

<section>
	<h1 class="mainTitle">Projects</h1>
	<div class="projects">
		{#each data.projects as project}
			<div class="project" id={project.id}>
				<div class="imageContainer">
					<img loading="lazy" class="projectImage" src={project.mainImage.url} width={project.mainImage.width} alt={project.title} />
				</div>
				<div class="details">
					{#each project.tags as tag}
						<p class="projectTag">{tag}</p>
					{/each}
					<p class="year projectTag">{project.year}</p>
				</div>
				<div class="content">
					<a href={`/projects/${project.slug}`}><h2 class="projectTitle">{project.title}</h2></a>
				</div>
			</div>
		{/each}

		<!-- -------------------LOADMORE BUTTON-------------------- -->

		<!-- <div class="loadmoreContainer">
			{#if first < data.projects.length}
				<div class="btn">
					<button on:click={() => (first = first + 3)} class="loadMore" type="button">
						Load More Projects 🡦
					</button>
				</div>
			{/if}
		</div> -->

		<!-- ----------------------------------------------------------- -->
	</div>
</section>

<style>
	.mainTitle {
		margin: 2rem 0 2rem 0;
		text-align: center;
		font-size: 3.5rem;
	}
	img {
		max-width: 100%;
	}

	.loadmoreContainer {
		min-width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.loadMore {
		font-weight: bold;
		cursor: pointer;
		text-decoration: underline;
		-webkit-appearance: none;
		-webkit-border-radius: 0;
		border-radius: 0;
		appearance: none;
		color: inherit;
	}

	button {
		background: transparent;
		border: none;
		text-transform: uppercase;
	}

	button:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	.projectTitle {
		font-size: 1.3rem;
	}

	.project {
		margin: 2rem 0 2rem 0;
	}

	.details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.projectTag {
		background-color: black;
		color: #b9b9b9;
		padding: 0.3rem;
		border-radius: 0.3rem;
		margin: 0.5rem 0 0.5rem 0;
	}

	.projectImage {
		border-radius: 0.5rem;
	}

	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		.mainTitle {
			font-size: 5rem;
		}

		.projectTitle {
			font-size: 2.5rem;
		}

		.details {
			font-size: 1.2rem;
		}
	}

	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		.mainTitle {
			font-size: 7rem;
		}

		.projectTitle {
			font-size: 3rem;
		}

		.details {
			font-size: 1.2rem;
		}
	}

	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		.mainTitle {
			font-size: 8rem;
		}

		.projectTitle {
			font-size: 4rem;
		}

		.details {
			font-size: 1.4rem;
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		.mainTitle {
			font-size: 11.8rem;
		}

		.projectTitle {
			font-size: 4rem;
		}

		.details {
			font-size: 1.4rem;
		}
	}
</style>
