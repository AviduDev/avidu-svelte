<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<!-- head content -->

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
            "@context": "https://schema.org/",
            "@type": "Person",
                "name": "Avidu Sampath",
                "image": "https://res.cloudinary.com/avidu/image/upload/v1672635670/1JxxrWlPeEgNUPLtiQbSG8eGiGea8ijJb_u8vibc.png",
                "jobTitle": "Website Designer, Front-end Developer", 
                "url": "https://avidu.me",
                "sameAs": [
                    "https://www.linkedin.com/in/avidu-web-designer-from-sri-lanka/",
                    "https://www.behance.net/avidu"
                ],
        }
    </script>`}
</svelte:head>

<section>
	<h1>About me</h1>
	<h3>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis in facere, autem
		distinctio pariatur? Veritatis labore ab provident inventore tenetur placeat quod, culpa
		quisquam quo quibusdam repellendus doloremque adipisci!
	</h3>
	<div class="imageContainer">
		<img
			src="https://res.cloudinary.com/avidu/image/upload/v1676927730/Avidu_Web-_Designer_and_Front_end_Developer_from_Sri_Lanka-WEB_zk9qoy.jpg"
			alt=""
		/>
	</div>
	<div class="content">
		{#each data.bios as bio}
			<ul id={bio.id}>
				<li class="item">
					<p><span><b>Full Name:</b></span> <span>{bio.fullName}</span></p>
				</li>

				<li class="item">
					<p><span><b>Date of Birth:</b></span> <span>{bio.dob}</span></p>
				</li>

				<li class="item">
					<p><span><b>Address:</b></span> <span>{bio.address}</span></p>
				</li>

				<li class="item">
					<p><span><b>Marital Status:</b></span> <span>{bio.maritalStatus}</span></p>
				</li>
			</ul>

			<h2>education</h2>
			<hr />

			<div>
				{@html bio.education.html}
			</div>

			<h2>experience</h2>
			<hr />

			<div>
				{@html bio.experience.html}
			</div>

			<h2>vision</h2>
			<hr />

			<div>
				{@html bio.vision.html}
			</div>

			<hr />

			<h2>values</h2>
			<div>
				{@html bio.values.html}
			</div>

		{/each}
	</div>
</section>

<style>
	hr {
		border: solid 1px black;
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
</style>
