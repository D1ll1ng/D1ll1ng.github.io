<script lang="ts">
	import facebookicon from '../footer/facebookicon.png';
	import instagramicon from '../footer/instagramicon.png';
	import mailicon from '../footer/mailicon.png';
</script>

<footer>
	<div class="container-footer">
		<div class="corner">
			<p>Hjemmeside tilhøre LetzTour</p>
		</div>
		<div class="corner">
			<a href="http://"><img style="width:34px; height:30px;" src={facebookicon} alt="facebook social icon" /></a>
			<a href="http://"><img style="width:34px; height:30px;" src={instagramicon} alt="instagram social icon" /></a>
			<a href="http://"><img style="width:34px; height:30px;" src={mailicon} alt="mail icon" /></a>
		</div>
	</div>
</footer>

<style>
	footer {
		background: linear-gradient(94deg, #408fa6 0%, #325b6a 100%);
		width: 100vw;
		color: white;
	}
	.container-footer{
		display: flex;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
	}
	.corner {
		height: 3.5em;
		margin: 1em;
		justify-content: left;
		color: white;
	}
	.corner a{
		transition: .3s;
		opacity: 1;
		margin-top: 20px;
	}
	.corner a:hover{
		opacity: .5;
	}
	.corner p {
		display: flex;
		justify-content: left;
		width: 100%;
		height: 100%;
		color: white;
	}
	.corner img {
		width: 20em;
		height: 3em;
		margin-top: 12px;
	}
</style>
