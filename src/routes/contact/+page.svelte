<script>
	import Contact from '../Contact.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />

	<title>Contact - Website Designer and Frontend Developer from Sri Lanka</title>
	<meta
		name="description"
		content="Contact Avidu for anything related to project inquary and to anything about his projects."
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
	<meta
		property="og:title"
		content="Contact - Website Designer and Frontend Developer from Sri Lanka"
	/>
	<meta
		property="og:description"
		content="Contact Avidu for anything related to project inquary and to anything about his projects."
	/>
	<meta name="og:url" content="https://avidu.me" />
	<meta property="og:locale" content="es_ES" />
	<meta property="og:url" content="https://avidu.me" />

	<meta name="twitter:title" content="Website Designer and Frontend Developer from Sri Lanka" />
	<meta
		name="twitter:description"
		content="Contact Avidu for anything related to project inquary and to anything about his projects."
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
              "name": "Contact - Website Designer and Frontend Developer from Sri Lanka",
              "description": "Contact Avidu for anything related to project inquary and to anything about his projects.",
              "image": "https://res.cloudinary.com/avidu/image/upload/v1672635670/1JxxrWlPeEgNUPLtiQbSG8eGiGea8ijJb_u8vibc.png"
              "url": "https://avidu.me",
              "author" : {
                "@type" : "Person",
                "name" : "Avidu"
            },
            }
    </script>`}
</svelte:head>

<section itemscope itemtype="https://schema.org/FAQPage">
	<h1>Contact</h1>
	<h3 class="healine">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit voluptas minima provident
		repellat nobis, quibusdam, fuga accusamus dicta illum, amet adipisci quam quis harum.
	</h3>

	<ol class="faqs">
		{#each data.faqs as faq}
			<li class="faq">
				<h4 itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
					{faq.question}
				</h4>
				<p class="answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">{faq.answer}</p>
			</li>
			<hr />
		{/each}
	</ol>

	<Contact />
</section>

<style>
	h1 {
		text-align: center;
	}

	.healine {
		text-align: justify;
		margin: 1rem 0 2rem 0;
	}
	hr {
		border: solid 1px black;
	}

	.faq {
		margin: 2rem 0 0 0;
	}

	.answer {
		margin: 1rem 0 0 0;
	}
</style>
