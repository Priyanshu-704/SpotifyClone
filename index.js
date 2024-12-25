console.log('welcome to spotify');
let song_index = 0;
let main_bgcolor = document.querySelector('.container');
let footer_bgcolor = document.querySelector('.sound_bar');
let audio_element = new Audio('');
let play_pause_btn = document.querySelector('#plays');
let progress_bar = document.querySelector('.seek_bar');
let tog_body = document.querySelector('.togbody');
let vol_bar = document.querySelector('.volume_bar');
let song_items = Array.from(document.getElementsByClassName('songsss'));
let songheader = document.querySelector('.songhead');
let likee = document.querySelector('.like');
let epp = document.querySelector('.epp');
let hom = document.querySelector('.home');
let ser = document.querySelector('.search');
let pp = document.querySelector('.play_pause');
let vl = document.querySelector('#vl');
let duration = document.querySelector('.times');
let bat = document.querySelector('.bat');
let singer = document.querySelector('.singer_name');
let name_song = document.querySelector('.song-name');
let songs =
    [
        { song_name: "Todh", File_path: "song1.mp3", cover_path: src = "pics/song1.png ", cast_name: "Prince Narula , Munawar Faruqui ", time_update: `3:56` },
        { song_name: "California Love", File_path: "song2.mp3", cover_path: src = "pics/song2.png", cast_name: "Gur Sidhu , Cheema Y", time_update: "2:55" },
        { song_name: "SPAIN", File_path: "songs/song3.mp3", cover_path: src = "pics/song3.png", cast_name: "Jassa Dhillon, Thiarajxtt", time_update: "1:44" },
        { song_name: "Rao Sahab Drill", File_path: "song4.mp3", cover_path: src = "pics/song4.png", cast_name: "Vkey, SDEE", time_update: "3:31" },
        { song_name: "Check It Out", File_path: "song5.mp3", cover_path: src = "pics/song5.png", cast_name: "Parmish Verma, Paradox", time_update: "3:15" },
        { song_name: "Yadav Brand 2", File_path: "song6.mp3", cover_path: src = "pics/song6.png", cast_name: "Sunny Yaduvanshi, AK RoK, Nitesh Ujoli ", time_update: "2:54" },
        { song_name: "Haryana Hood", File_path: "song7.mp3", cover_path: src = "pics/song7.png", cast_name: "Irshad Khan", time_update: "3:31" },
        { song_name: "9:45 ", File_path: "song8.mp3", cover_path: src = "pics/song8.png", cast_name: "Prabh Singh, Jay Trak", time_update: "1:57" },
    ];

    song_items.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].cover_path;
    element.getElementsByClassName('songname')[0].innerHTML = songs[i].song_name;
    element.getElementsByClassName('castname')[0].innerHTML = songs[i].cast_name;
    element.getElementsByClassName('times')[0].innerHTML = songs[i].time_update;

})


// -------------------------------- FOR PLAY/PAUSE AND SEEK BAR UPDATION------------------------------------------

play_pause_btn.addEventListener('click', () => {
    if (audio_element.paused || audio_element.currentTime <= 0) {
        // console.log('hellooo i am working');
        audio_element.play();
        play_pause_btn.classList.remove('fa-circle-play');
        play_pause_btn.classList.add('fa-circle-pause');
    }
    else {
        audio_element.pause();
        play_pause_btn.classList.remove('fa-circle-pause');
        play_pause_btn.classList.add('fa-circle-play');
    }
});


audio_element.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    let progress = parseInt((audio_element.currentTime / audio_element.duration) * 100);
    // console.log(progress);
    progress_bar.value = progress;
});





progress_bar.addEventListener('change', () => {
    audio_element.currentTime = progress_bar.value * audio_element.duration / 100;
})



// -----------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------- FOR DAY/NIGHT TOGGLE BUTTON ------------------------------------------

function toggle_fun(mycheck) {
    if (mycheck.checked == true) {
        tog_body.style.paddingLeft = ('2.5vw');
        tog_body.style.transition = ('padding-Left 0.5s');
        main_bgcolor.style.backgroundColor = ('#FFFFFF');
        footer_bgcolor.style.backgroundColor = ('#FFFFFF');
        footer_bgcolor.style.transition = ('backgroundColor 0.5s');
        main_bgcolor.style.transition = ('backgroundColor 0.5s');
        document.querySelector('.box1').style.backgroundColor = ('rgb(190 190 190)');
        document.querySelector('.box1').style.transition = ('backgroundColor 0.5s');
        document.querySelector('.box2').style.backgroundColor = ('rgb(190 190 190)');
        document.querySelector('.box2').style.transition = ('backgroundColor 0.5s');
        document.querySelector('.box3').style.backgroundColor = ('rgb(190 190 190)');
        document.querySelector('.box3').style.transition = ('backgroundColor 0.5s');
        document.querySelector('.sub_box1').style.transition = ('backgroundColor 0.5s');
        document.querySelector('.sub_box1').style.backgroundColor = ('black');
        tog_body.style.backgroundColor = ('#1DB954');
        tog_body.style.transition = ('all 0.5s');
        document.getElementById('day_night_logo').classList.remove('fa-moon');
        document.getElementById('day_night_logo').classList.add('fa-sun');
        Array.from(document.getElementsByClassName('songsss')).forEach((element) => {
            element.style.backgroundColor = ('#FFFFFF');
            element.style.transition = ('all 0.5s');
            element.style.color = ("black");
        });
        songheader.style.color = "black";
        likee.style.color = "black";
        epp.style.color = "black";
        hom.style.color = 'black';
        ser.style.color = 'black';
        pp.style.color = 'black';
        vl.style.color = 'black';
        duration.style.color = 'black';
        bat.style.color = 'black';
        singer.style.color = 'black';
        name_song.style.color = 'black';

    }
    else {
        tog_body.style.paddingLeft = ('0rem');
        tog_body.style.transition = ('padding-Left 0.5s');
        main_bgcolor.style.backgroundColor = ('#000000');
        footer_bgcolor.style.backgroundColor = ('#000000');
        document.querySelector('.box1').style.backgroundColor = 'rgb(18 17 17)';
        document.querySelector('.box2').style.backgroundColor = 'rgb(18 17 17)';
        document.querySelector('.box3').style.backgroundColor = 'rgb(18 17 17)';
        document.querySelector('.sub_box1').style.backgroundColor = ('white');
        tog_body.style.backgroundColor = ('white');
        tog_body.style.transition = ('all 0.5s');
        document.getElementById('day_night_logo').classList.remove('fa-sun');
        document.getElementById('day_night_logo').classList.add('fa-moon');
        Array.from(document.getElementsByClassName('songsss')).forEach((element) => {
            element.style.backgroundColor = ('#646464');
            element.style.transition = ('all 0.5s');
            element.style.color = ("white");
        })
        songheader.style.color = "white";
        likee.style.color = "white";
        epp.style.color = "white";
        hom.style.color = '#5f5f5f';
        ser.style.color = '#5f5f5f';
        pp.style.color = 'white';
        vl.style.color = 'white';
        duration.style.color = 'white';
        bat.style.color = 'white';
        singer.style.color = '#21e617';
        name_song.style.color = '#21e617';
    }
}

// ------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------- SONG ITEM PLAYING CONTROL------------------------------------------------


Array.from(document.getElementsByClassName('songdata')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        song_index = parseInt(e.target.id);
        // console.log(`song${song_index}`);
        play_pause_btn.classList.remove('fa-circle-play');
        play_pause_btn.classList.add('fa-circle-pause');
        audio_element.src = `song${song_index}.mp3`;
        audio_element.currentTime = 0;
        audio_element.play();
        document.getElementsByClassName('simg')[0].src = `pics/song${song_index}.png`;
        document.getElementsByClassName('song-name')[0].innerHTML = songs[i].song_name;
        document.getElementsByClassName('singer_name')[0].innerHTML = songs[i].cast_name;
    })
});


// -----------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------ Next and previous controll js------------------------------------------------


document.getElementById('next').addEventListener('click', () => {
    if (song_index > 7) {
        song_index = 1;
        play_pause_btn.classList.remove('fa-circle-play');
        play_pause_btn.classList.add('fa-circle-pause');
        audio_element.src = `song${song_index}.mp3`;
        audio_element.currentTime = 0;
        audio_element.play();
        document.getElementsByClassName('simg')[0].src = `pics/song${song_index}.png`;
        document.getElementsByClassName('song-name')[0].innerHTML = songs[song_index - 1].song_name;
        document.getElementsByClassName('singer_name')[0].innerHTML = songs[song_index - 1].cast_name;
    }
    else {
        song_index += 1;
        play_pause_btn.classList.remove('fa-circle-play');
        play_pause_btn.classList.add('fa-circle-pause');
        audio_element.src = `song${song_index}.mp3`;
        audio_element.currentTime = 0;
        audio_element.play();
        document.getElementsByClassName('simg')[0].src = `pics/song${song_index}.png`;
        document.getElementsByClassName('song-name')[0].innerHTML = songs[song_index - 1].song_name;
        document.getElementsByClassName('singer_name')[0].innerHTML = songs[song_index - 1].cast_name;
    }
});

document.getElementById('previous').addEventListener('click', () => {
    if (song_index <= 1) {
        song_index = 1;
        play_pause_btn.classList.remove('fa-circle-play');
        play_pause_btn.classList.add('fa-circle-pause');
        audio_element.src = `song${song_index}.mp3`;
        audio_element.currentTime = 0;
        audio_element.play();
        document.getElementsByClassName('simg')[0].src = `pics/song${song_index}.png`;
        document.getElementsByClassName('song-name')[0].innerHTML = songs[song_index - 1].song_name;
        document.getElementsByClassName('singer_name')[0].innerHTML = songs[song_index - 1].cast_name;
    }
    else {
        song_index -= 1;
        play_pause_btn.classList.remove('fa-circle-play');
        play_pause_btn.classList.add('fa-circle-pause');
        audio_element.src = `song${song_index}.mp3`;
        audio_element.currentTime = 0;
        audio_element.play();
        document.getElementsByClassName('simg')[0].src = `pics/song${song_index}.png`;
        document.getElementsByClassName('song-name')[0].innerHTML = songs[song_index - 1].song_name;
        document.getElementsByClassName('singer_name')[0].innerHTML = songs[song_index - 1].cast_name;
    }
});


// -----------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------volume Bar changes----------------------------------------


let volbar = document.getElementsByClassName('volume_bar');
let volicone = document.getElementById('vol_icon');


vol_bar.addEventListener("change", chan_fun);

function chan_fun() {
    audio_element.volume = vol_bar.value / 100;
}








