<script></script>

<section>
	<h2>the process</h2>
	<ol class="ol">
		<li class="item">
			<h3 class="title"><span class="number">1.</span> <span>discussion</span></h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo eius laborum aliquid,
				adipisci ipsum voluptas iste maiores nemo sequi.
			</p>
		</li>

		<li class="item">
			<h3 class="title"><span class="number">2.</span> <span>research</span></h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo eius laborum aliquid,
				adipisci ipsum voluptas iste maiores nemo sequi.
			</p>
		</li>

		<li class="item">
			<h3 class="title"><span class="number">3.</span> <span>designing</span></h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo eius laborum aliquid,
				adipisci ipsum voluptas iste maiores nemo sequi.
			</p>
		</li>

		<li class="item">
			<h3 class="title"><span class="number">4.</span> <span>approval</span></h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo eius laborum aliquid,
				adipisci ipsum voluptas iste maiores nemo sequi.
			</p>
		</li>

		<li class="item">
			<h3 class="title"><span class="number">5.</span> <span>testing</span></h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo eius laborum aliquid,
				adipisci ipsum voluptas iste maiores nemo sequi.
			</p>
		</li>

		<li class="item">
			<h3 class="title"><span class="number">6.</span> <span>development</span></h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo eius laborum aliquid,
				adipisci ipsum voluptas iste maiores nemo sequi.
			</p>
		</li>
	</ol>
</section>

<style>
	section {
		margin: 4rem 0 4rem 0;
	}
	.title {
		font-size: 2rem;
		align-items: first baseline;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	h2 {
		text-align: center;
	}

	.ol {
		list-style: none;
	}

	.line {
		min-width: 100%;
		height: 10px;
		background-color: #000000;
	}

	.item {
		display: flex;
		flex-direction: column;
		margin: 2rem 0 2rem 0;
	}

	.item p {
		margin: 0.5rem 0 0.5rem 0;
		background-color: #000000;
		padding: 0.5rem;
		border-radius: 0.3rem;
		color: #b8b8b8;
		max-width: 70%;
		text-align: justify;
		align-self: flex-start;
	}

	@media (min-width: 576px) {
		h2 {
			font-size: 4.5rem;
		}

		.title {
			font-size: 2.8rem;
		}

		.item p {
			font-size: 1.3rem;
			max-width: 50%;
		}

		.item {
			margin: 4rem 0 4rem 0;
		}
	}

	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		h2 {
			font-size: 5rem;
		}

		.title {
			font-size: 3rem;
		}

		.item p {
			font-size: 1.4rem;
		}

		.item {
			margin: 3rem 0 3rem 0;
		}
	}

	/* Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		h2 {
			font-size: 6.5rem;
		}

		.title {
			font-size: 4rem;
		}

		.item p {
			padding: 1rem;
			font-size: 1.6rem;
			max-width: 50%;
		}

		.item {
			margin: 5rem 0 5rem 0;
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
	}
</style>
