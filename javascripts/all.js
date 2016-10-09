
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

function updateSong(name)
{
    var audio = $("#music");
    audio.attr("src", "assets/"+name+".m4a")
}

$(document).ready(function() {
    
    $('#fullpage').fullpage({
        anchors:['a_tlop'],
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            console.log(anchorLink);
            console.log(slideIndex);
            if(anchorLink == "a_tlop")
            {
                switch(slideIndex)
                {
                    case 0:
                        updateSong("yebutton");
                        break;
                    case 1:
                        updateSong("yaboymaxb");
                        break;
                    case 2:
                        updateSong("scary");
                        break;
                    case 3:
                        updateSong("hanh");
                        break;
                }

            }
        },
    });
});