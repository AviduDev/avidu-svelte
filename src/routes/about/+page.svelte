<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<!-- head content -->

	<meta name="robots" content="index, follow" />

	<title>About Me - Website Designer and Frontend Developer from Sri Lanka</title>
	<meta
		name="description"
		content="Learn more about avidu's personal, education, and work related details."
	/>
	<meta
		name="keywords"
		content="Web Design, Web Development, Frontend Development, web designer sri lanka, web developer sri lanka wordpress, next.js, svelte, sveltekit"
	/>
	<meta name="author" content="Avidu Sampath" />

	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://res.cloudinary.com/avidu/image/upload/v1676927730/Avidu_Web-_Designer_and_Front_end_Developer_from_Sri_Lanka-WEB_zk9qoy.jpg"
	/>
	<meta property="og:title" content="Website Designer and Frontend Developer from Sri Lanka" />
	<meta property="og:description" content="Avidu is a good website designer from sri lanka" />
	<meta name="og:url" content="https://avidu.me" />
	<meta property="og:locale" content="es_ES" />
	<meta property="og:url" content="https://avidu.me" />

	<meta
		name="twitter:title"
		content="About Me - Website Designer and Frontend Developer from Sri Lanka"
	/>
	<meta
		name="twitter:description"
		content="Learn more about avidu's personal, education, and work related details."
	/>
	<meta
		name="twitter:image"
		content="https://res.cloudinary.com/avidu/image/upload/v1676927730/Avidu_Web-_Designer_and_Front_end_Developer_from_Sri_Lanka-WEB_zk9qoy.jpg"
	/>
	<meta name="twitter:domain" content="https://avidu.me" />
	<meta name="twitter:card" content="summary_large_image" />

	{@html `<script type="application/ld+json">
        {
            "@context": "https://schema.org/",
            "@type": "Person",
                "name": "Avidu",
                "image": "https://res.cloudinary.com/avidu/image/upload/v1676927730/Avidu_Web-_Designer_and_Front_end_Developer_from_Sri_Lanka-WEB_zk9qoy.jpg",
                "jobTitle": "Website Designer, Front-end Developer", 
                "url": "https://avidu.me",
                "sameAs": [
                    "https://www.linkedin.com/in/avidu-web-designer-from-sri-lanka/",
                    "https://www.behance.net/avidu"
                ],
        }
    </script>`}
</svelte:head>

<section itemscope itemtype="https://schema.org/Person">
	<h1>About me</h1>
	<h3 class="dsc" itemprop="description">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis in facere, autem
		distinctio pariatur? Veritatis labore ab provident inventore tenetur placeat quod, culpa
		quisquam quo quibusdam repellendus doloremque adipisci!
	</h3>
	<div class="imageContainer">
		<img
			itemprop="image"
			src="https://res.cloudinary.com/avidu/image/upload/v1676927730/Avidu_Web-_Designer_and_Front_end_Developer_from_Sri_Lanka-WEB_zk9qoy.jpg"
			alt=""
		/>
	</div>
	<div class="content">
		{#each data.bios as bio}
			<ul class="bio" id={bio.id}>
				<li class="item">
					<p><span><b>Full Name:</b></span> <span itemprop="name">{bio.fullName}</span></p>
				</li>

				<li class="item">
					<p><span><b>Date of Birth:</b></span> <span itemprop="birthDate">{bio.dob}</span></p>
				</li>

				<li class="item" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
					<p><span><b>Address:</b></span> <span itemprop="streetAddress">{bio.address}</span></p>
				</li>

				<li class="item">
					<p><span><b>Marital Status:</b></span> <span>{bio.maritalStatus}</span></p>
				</li>
			</ul>

			<h2 class="title">education</h2>
			<hr />

			<div class="details">
				{@html bio.education.html}
			</div>

			<h2 class="title">experience</h2>
			<hr />

			<div class="details">
				{@html bio.experience.html}
			</div>

			<h2 class="title">vision</h2>
			<hr />

			<div class="details">
				{@html bio.vision.html}
			</div>

			<h2 class="title">values</h2>
			<hr />

			<div class="details">
				{@html bio.values.html}
			</div>
		{/each}
	</div>
</section>

<style>
	hr {
		border: solid 1px black;
	}

	.dsc {
		margin: 2rem 0 2rem 0;
	}
	.imageContainer {
		max-width: 100%;
		overflow: hidden;
		border-radius: 0.5rem;
	}
	img {
		aspect-ratio: 16 / 11;
		object-fit: cover;
		object-position: center;
		max-width: 100%;
		border-radius: 0.5rem;
	}
	h1 {
		text-align: center;
	}

	li {
		list-style: none;
		margin: 1rem 0 1rem 0;
	}

	.title {
		margin: 4rem 0 2rem 0;
	}

	.bio {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}


	hr {
		width: 100%;
	}
	

	/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
	h1 {
		font-size: 5rem;
	}
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
	h1 {
		font-size: 7rem;
	}
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
	h1 {
		font-size: 8rem;
	}

	.details {
		max-width: 75%;
	}

	.dsc {
		
	}
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {}
</style>
