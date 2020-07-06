function displayVideo() {
	const contentText = document.getElementById('content-text');
	const videoDiv = document.getElementById('my-video');
	const credits = document.getElementById('credits');
	credits.style.display = 'none';
	contentText.style.display = 'none';
	videoDiv.currentTime = 0;
	videoDiv.pause();
	videoDiv.style.display = 'flex';
}

function displayCredits() {
	const credits = document.getElementById('credits');
	const crewContainer = document.getElementById('crew-container');
	const laurelDiv = document.getElementById('laurels');
	credits.style.display = 'flex';
	laurelDiv.style.display = 'flex';
	crewContainer.style.display = 'flex';
}

