<script>
	/** @type {import('./$types').PageData} */
	export let data;
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
	<h1>Services</h1>
	<ul class="service">
		{#each data.services as service}
			<li id={service.id}>
				<h2 class="title">{service.serviceTitle}</h2>
				<div class="content">
					<p class="except">{service.serviceDescription}</p>
					<a class="learnMore" href={`/services/${service.slug}`}>Learn More</a>
				</div>
			</li>
		{/each}
	</ul>
	<hr class="line" />
</section>

<style>
	h1 {
		text-align: center;
	}

	.line {
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.except {
		max-width: 70%;
		text-align: justify;
	}

	.learnMore {
		text-align: end;
		align-self: flex-end;
	}
</style>
