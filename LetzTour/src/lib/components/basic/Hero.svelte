<div class="hero">
		<h1>Klar på en fantastisk heretur?</h1>
		<p>Søg her og få forslag på hereture… Tilpas din søgning og lav der perfekt til din gruppe</p>
		<form action="post">
			<div class="HeroformfirstRow" >
				<input type="input" name="lokation" id="">
				<input type="date" name="Dato" id="">
				<input type="input" name="Antal personer" id="">
				<input type="search" name="søg" id="">
				<br/><br/>
			</div>
			<div class="HeroformSecondRow" >
				<input type="btn" name="Kultu" id="">
				<input type="btn" name="Fest" id="">
				<input type="btn" name="Aktiv" id="">
			</div>
		</form>
</div>

<style>
	.hero {
		height: 480px;
		background-color: rgb(158, 158, 158);
		text-align: center;
		color: white;
		width: 100vw
	}
	.hero h1, .hero p{
		color: white;
	}
	.hero form {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		
	}
	.HeroformfirstRow{
		width: 100%;
	}
	.HeroformSecondRow{
		width: 100%;
	}
</style>
