
 // Background
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial";

let bg = document.createElement("div");
bg.style.cssText = `
    min-height:100vh;
    background:url("https://blog.shaadi.com/wp-content/uploads/2024/07/03_Why-is-Marriage-Important_-12-Powerful-Reasons-Why-You-Should-Get-Married-650x366.jpg") center/cover;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    text-align:center;
`;
document.body.appendChild(bg);

// Main content
let content = document.createElement("div");
content.style.cssText = `
    background:rgba(0,0,0,0.55);
    padding:25px;
    border-radius:20px;
    width:350px;
    max-width:85%;
`;
bg.appendChild(content);

// Heading
let heading = document.createElement("h1");
heading.innerHTML = "शादी<br>Wedding";
content.appendChild(heading);

let subtitle = document.createElement("p");
subtitle.innerText = "♥ Our Wedding Memories ♥";
content.appendChild(subtitle);

// Music player
let box = document.createElement("div");
box.style.cssText = `
    background:#541321;
    padding:15px;
    border-radius:20px;
`;
content.appendChild(box);

// Album image
let cover = document.createElement("img");
cover.src = "https://placehold.co/100x100/800020/ffffff?text=Wedding";
cover.style.cssText = `
    width:70px;
    height:70px;
    border-radius:50%;
`;
box.appendChild(cover);

// Song name
let songName = document.createElement("h3");
box.appendChild(songName);

// Audio player: create only once
let audio = document.createElement("audio");
audio.preload = "metadata";
content.appendChild(audio);

// Buttons
let controls = document.createElement("div");
box.appendChild(controls);

function createButton(text) {
    let btn = document.createElement("button");
    btn.innerText = text;
    btn.style.cssText = `
        margin:8px;
        padding:12px;
        border:0;
        border-radius:50%;
        cursor:pointer;
    `;
    controls.appendChild(btn);
    return btn;
}

let previous = createButton("⏮");
let play = createButton("▶");
let next = createButton("⏭");

// Song list
let songs = [
    
    {
        name: "Butta Bomma",
        link: "songs/Butta Bomma.mp3"
    },
    {
        name: "Inthandham",
        link: "songs/Inthandham.mp3"
    },
    {
        name: "Samajavaragamana",
        link: "songs/Samajavaragamana.mp3"
    }
];

let index = 0;

function loadSong() {
    songName.innerText = songs[index].name;
    audio.src = songs[index].link;
    audio.load();
    play.innerText = "▶";
}

loadSong();

// Play and pause
play.onclick = function() {
    if (audio.paused) {
        audio.play()
            .then(() => play.innerText = "⏸")
            .catch(() => alert("Check the song file and its path."));
    } else {
        audio.pause();
        play.innerText = "▶";
    }
};

// Next song
next.onclick = function() {
    index = (index + 1) % songs.length;
    loadSong();

    audio.play()
        .then(() => play.innerText = "⏸")
        .catch(() => alert("Check the song file and its path."));
};

// Previous song
previous.onclick = function() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong();

    audio.play()
        .then(() => play.innerText = "⏸")
        .catch(() => alert("Check the song file and its path."));
};

// When song finishes
audio.onended = function() {
    next.onclick();
};

// Bottom message
let message = document.createElement("p");
message.innerText = "A celebration of love and togetherness 💍";
content.appendChild(message);
