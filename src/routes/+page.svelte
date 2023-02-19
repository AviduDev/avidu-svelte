<script>
	import Hero from './Hero.svelte';
	import Description from './Description.svelte';
	import Services from './Services.svelte';

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
	<!-- --------------------HERO-------------------- -->
	<Hero />

	<!-- --------------------DESCRIPTION-------------------- -->
	<Description />

	<!-- --------------------DESCRIPTION-------------------- -->
	<Services />

	<!-- --------------------PROJECTS-------------------- -->
	<section class="projects">
		<h2>selected projects</h2>
		<div class="projects">
			{#each data.projects.slice(0, first) as project}
				<li id={project.id}>
					<div class="image-content">
						<img src={project.mainImage.url} alt={project.mainImage.id} />
					</div>
					<div class="content">
						<div class="author-section">
							<!-- <img class="authorImg" src={post.publishedBy.picture} alt={post.publishedBy.id} />
									<span class="author">{post.publishedBy.name}</span> -->
						</div>
						<a href={`/projects/${project.slug}`}>{project.title}</a>
						<br />
					</div>
				</li>
			{/each}
		</div>
	</section>
</section>

<style>
	img {
		max-width: 100%;
	}

	h2 {
		text-align: center;
	}
</style>
