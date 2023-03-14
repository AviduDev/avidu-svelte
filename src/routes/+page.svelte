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
	<meta
		name="description"
		content="Avidu is a creative web developer and designer from sri lanka who builds modern, fast, and cost-effective websites using modern tech stacks"
	/>
	<meta
		name="keywords"
		content="Web Design, Web Development, Frontend Development, web designer sri lanka, web developer sri lanka wordpress, next.js, svelte, sveltekit"
	/>
	<meta name="author" content="Avidu" />

	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://res.cloudinary.com/avidu/image/upload/v1676927730/Avidu_Web-_Designer_and_Front_end_Developer_from_Sri_Lanka-WEB_zk9qoy.jpg"
	/>
	<meta property="og:title" content="Website Designer and Frontend Developer from Sri Lanka" />
	<meta
		property="og:description"
		content="Avidu is a creative web developer and designer from sri lanka who builds modern, fast, and const-effective websites using modern tech stacks"
	/>
	<meta name="og:url" content="https://avidu.me" />
	<meta property="og:locale" content="es_ES" />

	<meta name="twitter:title" content="Website Designer and Frontend Developer from Sri Lanka" />
	<meta
		name="twitter:description"
		content="Avidu is a creative web developer and designer from sri lanka who builds modern, fast, and const-effective websites using modern tech stacks"
	/>
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/avidu/image/upload/v1676927730/Avidu_Web-_Designer_and_Front_end_Developer_from_Sri_Lanka-WEB_zk9qoy.jpg"
	/>
	<meta name="twitter:domain" content="https://avidu.me" />
	<meta name="twitter:card" content="summary_large_image" />

	{@html `<script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "website",
              "name": "Website Designer and Frontend Developer from Sri Lanka",
              "description": "Avidu is a creative web developer and designer from sri lanka who builds modern, fast, and const-effective websites using modern tech stacks",
              "image": "https://res.cloudinary.com/avidu/image/upload/v1676927730/Avidu_Web-_Designer_and_Front_end_Developer_from_Sri_Lanka-WEB_zk9qoy.jpg"
              "url": "https://avidu.me",
              "author" : {
                "@type" : "Person",
                "name" : "Avidu"
            },
            }
    </script>`}
</svelte:head>

<section>
	<!-- <Notice /> -->
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
			<div class="line" />
		{/each}
	</ul>

	<!-- --------------------PROJECTS-------------------- -->
	<section class="projectContainer">
		<h2>selected projects</h2>
		<div class="projects">
			{#each data.projects.slice(0, first) as project}
				<div class="project" id={project.id}>
					<div class="imageContainer">
						<img class="projectImage" src={project.mainImage.url} width={project.mainImage.width} alt={project.title} />
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
		</div>

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
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	img {
		max-width: 100%;
	}

	h2 {
		text-align: center;
	}

	/* -------------------------------PROJECTS--------------------------------- */

	.projectTitle {
		text-align: start;
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

	.projectDes a {
		align-self: flex-end;
		text-align: end;
	}

	/* ---------------------------------------------------------------------- */

	/* --------------------------------------SERVICES------------------------- */
	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		list-style: none;
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		text-align: start;
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

	/* ------------------------------------------------------------------- */

	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		h2 {
			font-size: 4.5rem;
		}

		.serviceTitle {
			font-size: 3rem;
		}

		.projectTitle {
			font-size: 2.5rem;
		}

		.projectDes {
			font-size: 1.4rem;
		}
	}

	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		h2 {
			font-size: 5rem;
		}
		.serviceTitle {
			font-size: 3.8rem;
		}

		.projectTitle {
			font-size: 3rem;
		}

		.projectDes {
			font-size: 1.6rem;
		}
	}

	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		h2 {
			font-size: 6.5rem;
		}
		.serviceTitle {
			font-size: 5rem;
		}

		.projectTitle {
			font-size: 4rem;
		}

		.projectDes {
			font-size: 1.6rem;
		}

		.services {
			margin: 6rem 0 6rem 0;
		}

		.projectTag {
			font-size: 1.4rem;
		}

		.project {
			margin: 6rem 0 6rem 0;
		}

		.projectDes p {
			max-width: 60%;
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		h2 {
			font-size: 10rem;
		}

		.project {
		margin: 8rem 0 8rem 0;
	}

		.serviceTitle {
			font-size: 7rem;
		}

		.projectContainer {
			margin: 10rem 0 10rem 0;
		}

		.projectTitle {
			font-size: 4rem;
		}

		.projectDes p {
			max-width: 40%;
		}

		.serviceItem {
		margin: 4rem;
	}
	}
</style>
