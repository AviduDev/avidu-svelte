<script>
	import Hero from './Hero.svelte';
	import Description from './Description.svelte';
	import Process from './Process.svelte';
	import Contact from './Contact.svelte';
	import Notice from './Notice.svelte';

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
	<Notice />
	<!-- --------------------HERO-------------------- -->
	<Hero />

	<!-- --------------------DESCRIPTION-------------------- -->
	<Description />

	<!-- --------------------SERVICES-------------------- -->
	<ul class="services">
		{#each data.services as service}
			<li class="serviceItem" id={service.id}>
				<h3 class="serviceTitle">
					<a class="serviceLink" href={`/services/${service.slug}`}>{service.serviceTitle}</a>
				</h3>
			</li>
			<!-- <hr /> -->
			<div class="line"></div>
		{/each}
	</ul>

	<!-- --------------------PROJECTS-------------------- -->
	<section class="projectContainer">
		<h2>selected projects</h2>
		<ul class="projects">
			{#each data.projects.slice(0, first) as project}
				<li class="projectItem" id={project.id}>
					<div class="image-content">
						<img src={project.mainImage.url} alt={project.mainImage.id} />
					</div>
					<div class="content">
						<a href={`/projects/${project.slug}`}><h3>{project.title}</h3></a>
					</div>
				</li>
			{/each}
		</ul>

		<div class="projectDes">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic perspiciatis maxime,
				alias adipisci enim similique officia fugit et error dolore neque aperiam repudiandae
				possimus!
			</p>
			<a href="/projects">all projects</a>
		</div>
	</section>

	<!-- --------------------PROCESS-------------------- -->
	<Process />

	<!-- --------------------CONTACT-------------------- -->
	<Contact />
</section>

<style>
	img {
		max-width: 100%;
	}

	h2 {
		text-align: center;
	}

	.projectDes {
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: end;
		margin: 2rem;
	}

	.projectDes p {
		text-align: justify;
		align-self: flex-start;
		max-width: 70%;
	}

	.projectItem {
		margin: 1rem;
	}
	.projectDes a {
		align-self: flex-end;
		text-align: end;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		list-style: none;
	}

	hr {
		width: 100%;
		border: solid 1px black;
	}

	.serviceTitle {
		font-size: 2.5rem;
	}

	.services {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.serviceItem {
		width: 100%;
		margin: 1rem;
	}

	.services {
		margin: 4rem 0 4rem 0;
	}

	.line {
		width: 100%;
		background-color: #000000;
		height: 0.3rem;
	}

	.serviceLink:hover ~ .line {
		height: 10px;
	}
</style>
