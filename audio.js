var data = {

     title : [
      "MiyaGi - Samuray",
      "Kar - Qez",
      "Hope",
     ],
     song : [
            "music/samuray.mp3",
            "music/Kar Qez.mp3",
            "music/xxxtentacion_-_hope.mp3",
     ],
     poster : [
        "https://i1.sndcdn.com/artworks-ShwrZl3dgb5ViLev-LymHmQ-t500x500.jpg",   
        "https://i1.sndcdn.com/artworks-KkLHjVeVskVR8W8t-YBN8wQ-t500x500.jpg", 
        "https://i.ytimg.com/vi/IhlGR2VJvUE/maxresdefault.jpg",
     ]


}
   var song = new Audio()
   var currentSong = 0 
      
 


   window.onload = function ( ) {
       playSong()
   }


   function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");
    
    
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
    }

function playOrPauseSong() {
    let play = document.getElementById("play")
    //console.log(play);
    
    if (song.paused) {
    song.play();
    play.src = "images/pause.png" //pause
    } else {
    song.pause();
    play.src = "images/play-button-arrowhead.png" //play
    }
    }
    


  song.addEventListener("timeupdate", function () {
      let fill = document.getElementById("fill")
      let position = song.currentTime / song.duration;
      fill.style.width = position * 100 + "%";
      convertTime(song.currentTime)
       
      if (song.ended) {
          this.next()
      }
  })

  function convertTime(seconds) {
      let currentTime = document.getElementById("currentTime")


      let min = Math.floor(seconds / 60)
      let sec = Math.floor(seconds % 60)



      min = (min < 10) ? "0" + min : min;
      sec = (sec < 10) ? "0" + sec : sec;



      currentTime.textContent = min + ":" + sec
     totalTime(Math.round(song.duration))
      console.log(seconds);
      console.log(min);
      
  };
  function totalTime(seconds) {
   
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)



    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;



    currentTime.textContent += " / " + min + ":" + sec;
    
};
  
    function next( ) {
        currentSong++;
        if (currentSong >= data.song.length){
            currentSong = 0
        }
        playSong();
        play.src = "images/pause.png"
    }
    function pre( ) {
       currentSong--;
       if(currentSong < 0) {
         currentSong = data.song.length - 1;
       }
        playSong();
        play.src = "images/pause.png"
    }

    function muted(){
        var mute = document.getElementById("mute")
        if(song.muted) {
            song.muted = false
            mute.src = "images/volume.png"
        }else {
            song.muted = true
            mute.src = "images/volume-mute.png"
        }
    }
     
    
    function decrease() {
        song.volume -= 0.2
    }
     function increase() {
         song.volume += 0.2
     }


  