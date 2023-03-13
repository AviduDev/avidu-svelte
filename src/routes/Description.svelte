<script></script>

<section>
	<p class="description">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, qui distinctio! Corrupti
		similique, officiis ullam hic vero quae nisi expedita doloremque amet. Voluptate enim voluptates
		dolorum necessitatibus quae quia sit!
	</p>

	<div class="location">
		<p>7.673421</p>
		<p>80.419030</p>
	</div>
</section>

<style>
	section {
		margin: 2rem 0 2rem 0;
	}
	.description {
		max-width: 80%;
		text-align: justify;
	}

	.location {
		margin: 1rem 0 1rem 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	@media (min-width: 576px) {
		.description {
			font-size: 1.4rem;
		}

		.location {
			margin: 2rem 0 2rem 0;
			font-size: 1.4rem;
		}
	}

	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		.description {
			font-size: 1.6rem;
		}

		.location {
			margin: 2rem 0 2rem 0;
			font-size: 1.6rem;
		}
	}

	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		.description {
			max-width: 60%;
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		.description {
			margin: 6rem 0 4rem 0;
			max-width: 30%;
		}
	}
</style>
