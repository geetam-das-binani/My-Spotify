
let audioelement = new Audio()
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.querySelector('#myProgressBar');
let gif = document.getElementById('gif');
let songItem = document.getElementsByClassName('songItem');
let SongItemPlay = document.getElementsByClassName('SongItemPlay');
let bottom_song_Name = document.getElementById('bottom_song_Name');
let backward= document.getElementById('backward');
let forward = document.getElementById('forward');
let SongIndex = 0;


let songs = [{ Songname: 'Midnight Memories', filename: "../songs/1.mp3", coverPath: "../covers/1.jpg" },
{ Songname: 'Drag Me Down', filename: "../songs/2.mp3", coverPath: "../covers/2.jpg" },
{ Songname: `Live While we're Young`, filename: "../songs/3.mp3", coverPath: "../covers/3.jpg" },
{ Songname: 'Night Changes', filename: "../songs/4.mp3", coverPath: "../covers/4.jpg" },
{ Songname: 'Eighteen', filename: "../songs/5.mp3", coverPath: "../covers/5.jpg" },
{ Songname: 'Perfect', filename: "../songs/6.mp3", coverPath: "../covers/6.jpg" },
{ Songname: 'Story of My Life', filename: "../songs/7.mp3", coverPath: "../covers/7.jpg" },
{ Songname: 'Little Things', filename: "../songs/8.mp3", coverPath: "../covers/8.jpg" },
{ Songname: 'You and I', filename: "../songs/9.mp3", coverPath: "../covers/9.jpg" },

]

// Assiging CoverImage and SongName 
Array.from(songItem).forEach((element, index) => {
    element.getElementsByTagName('img')[0].src = songs[index].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[index].Songname;
    element.getElementsByClassName('songName')[0].style.fontWeight="900";
    element.getElementsByClassName('songName')[0].style.fontFamily="Georgia, 'Times New Roman', Times, serif";

})
// Listen to Events 
audioelement.addEventListener('timeupdate', () => {
    // update seekbar
    let progress = parseInt((audioelement.currentTime / audioelement.duration) * 100)
    myProgressBar.value = progress;
    
})
myProgressBar.addEventListener('input', () => {
    // when myProgressBar will be changed 
    audioelement.currentTime = (myProgressBar.value * audioelement.duration) / 100
    myProgressBar.value = audioelement.currentTime
    console.log(audioelement.currentTime)


})

// When a particular play button is clicked the rest of the play buttons should come to their original state(Showing Play Icon) 
const makeallplay = () => {
    Array.from(SongItemPlay).forEach((element) => {

        element.classList.add('fa-play-circle')
        element.classList.remove('fa-pause-circle')
    })
}

// When user clicks a particular play button 
Array.from(SongItemPlay).forEach((element) => {

    element.addEventListener('click', (e) => {
        if (audioelement.paused) {
            makeallplay();
            SongIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioelement.src = `../songs/${SongIndex + 1}.mp3`;
            audioelement.currentTime = 0;
            audioelement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            bottom_song_Name.innerText = songs[SongIndex].Songname;
            gif.style.opacity = 1;
            // timeStamp[SongIndex].innerText=myProgressBar.value;
            }
        else {
            e.target.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            audioelement.pause();
            gif.style.opacity = 0
}
    })

})
// Handle play/pause 
masterPlay.addEventListener('click', () => {

    if (audioelement.paused || audioelement.currentTime == 0) {
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        SongItemPlay[SongIndex].classList.add('fa-pause-circle');
        SongItemPlay[SongIndex].classList.remove('fa-play-circle');

    }

    else {
        audioelement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
        SongItemPlay[SongIndex].classList.remove('fa-pause-circle')
        SongItemPlay[SongIndex].classList.add('fa-play-circle')

    }

})


forward.addEventListener('click', () => {
    if (SongIndex >= 8) {
        SongIndex = 0;

    }

    else {
        SongIndex += 1;

    }
    audioelement.src = `../songs/${SongIndex + 1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    bottom_song_Name.innerText = songs[SongIndex].Songname;
    gif.style.opacity = 1;
    SongItemPlay[SongIndex - 1].classList.add('fa-play-circle');
    SongItemPlay[SongIndex - 1].classList.remove('fa-pause-circle');
    SongItemPlay[SongIndex].classList.add('fa-pause-circle');
    SongItemPlay[SongIndex].classList.remove('fa-play-circle');

})
backward.addEventListener('click', () => {
    if (SongIndex <= 0) {
        SongIndex = 0;

    }
    else {
        SongIndex -= 1;
    }
    audioelement.src = `../songs/${SongIndex + 1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    bottom_song_Name.innerText = songs[SongIndex].Songname;
    gif.style.opacity = 1;
    SongItemPlay[SongIndex].classList.add('fa-pause-circle');
    SongItemPlay[SongIndex].classList.remove('fa-play-circle');
    SongItemPlay[SongIndex +1].classList.add('fa-play-circle');
    SongItemPlay[SongIndex +1].classList.remove('fa-pause-circle');


})

