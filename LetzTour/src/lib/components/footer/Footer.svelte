<script lang="ts">
	import logo from '../header/logo.png';
</script>

<footer>
	<div class="corner">

		<p>Footer CUNTENTen</p>
	</div>

	<div>

	</div>

	<div class="corner">
				<a sveltekit:prefetch href="/">
			<img src={logo} alt="LetzTour" />
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		--background: rgb(46, 46, 46);
		background: var(--background);
		width: 100vw;
		color: white;
	}
	.corner {
		width: 4em;
		height: 3.5em;
		margin: 1em;
		justify-content: left;
		color: white;
	}
	.corner a {
		display: flex;
		align-items: left;
		justify-content: left;
		width: 100%;
		height: 100%;
		color: white;
	}
	.corner p {
		display: flex;
		align-items: left;
		justify-content: left;
		width: 100%;
		height: 100%;
		color: white;
	}
	.corner img {
		width: 20em;
		height: 3em;
		object-fit: center;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
