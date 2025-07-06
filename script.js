let currentIndex = 0;
let audio = new Audio('songs/1.mp3');
let playBtn = document.getElementById('masterPlay');
let progressBar = document.getElementById('myProgressBar');
let animation = document.getElementById('gif');
let currentTitle = document.getElementById('masterSongName');
let tracks = Array.from(document.getElementsByClassName('songItem'));

let trackList = [
    { songName: "On & On", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Invincible", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Mortals", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Shine", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Why We Lose", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Sky High", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Symbolism", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Heroes Tonight", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Feel Good", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "My Heart", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
];

function updateUI() {
    audio.src = trackList[currentIndex].filePath;
    currentTitle.innerText = trackList[currentIndex].songName;
    audio.currentTime = 0;
    audio.play();
    playBtn.classList.remove('fa-play-circle');
    playBtn.classList.add('fa-pause-circle');
    animation.style.opacity = 1;
}

function resetAllPlays() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(el => {
        el.classList.remove('fa-pause-circle');
        el.classList.add('fa-play-circle');
    });
}

function nextTrack() {
    currentIndex = (currentIndex + 1) % trackList.length;
    updateUI();
}

playBtn.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        updateUI();
    } else {
        audio.pause();
        playBtn.classList.remove('fa-pause-circle');
        playBtn.classList.add('fa-play-circle');
        animation.style.opacity = 0;
    }
});

audio.addEventListener('ended', nextTrack);

tracks.forEach((item, index) => {
    item.querySelector("img").src = trackList[index].coverPath;
    item.querySelector(".songName").innerText = trackList[index].songName;
    item.querySelector(".songItemPlay").addEventListener('click', (e) => {
        resetAllPlays();
        currentIndex = index;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        updateUI();
    });
});
