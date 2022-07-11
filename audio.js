var data = {

    title: [
        "MiyaGi - Samuray",
        "Kar - Qez",
        "HOPE",
        "ATTENTION"
    ],
    song: [
        "music/samuray.mp3",
        "music/Kar Qez.mp3",
        "music/xxxtentacion_-_hope.mp3",
        "music/attention.mp3"
    ],
    poster: [
        "https://cdns-images.dzcdn.net/images/artist/231ddc761574e456f013a27f9e019f3a/500x500.jpg",
        "https://i1.sndcdn.com/artworks-KkLHjVeVskVR8W8t-YBN8wQ-t500x500.jpg",
        "https://browsecat.net/sites/default/files/xxxtentacion-blue-wallpapers-126069-333639-9366859.png",
        "https://wallpaperaccess.com/full/334303.jpg",
    ]


}
var song = new Audio()
var currentSong = 0




window.onload = function () {
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

function next() {
    currentSong++;
    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong();
    play.src = "images/pause.png"
}
function prev() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "images/pause.png"
}

function muted() {
    var mute = document.getElementById("mute")
    if (song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
    } else {
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



const progress = document.getElementById('fill');
const progressContainer = document.getElementById('handle');


function updateProgress(e) {
const { duration, currentTime } = e.srcElement;
const progressPercent = (currentTime / duration) * 100;
progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
const width = this.clientWidth;
const clickX = e.offsetX;
const duration = song.duration;

song.currentTime = (clickX / width) * duration;
}

// Time/song update
song.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);