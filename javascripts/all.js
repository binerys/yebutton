// This is where it all goes :)
function play()
{
    var audio = document.getElementById("music");
    if (audio.paused)
    {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0; 
        audio.play();
    }

	
}