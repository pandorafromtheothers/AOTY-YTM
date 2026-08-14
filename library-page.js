let album, artist = "";
let array = document.querySelectorAll(".albumBlock");
let searchLink = window.innerWidth > 600 ? "https://music.youtube.com/search?q=" : "vnd.youtube.music://search?q=";

for (let index = 0; index < array.length; index++) {
    let element = array[index];
    artist = element.querySelector(".artistTitle").innerText;
    album = element.querySelector(".albumTitle").innerText;
    element.querySelector(".type.functions").innerHTML += `<a href=\"${searchLink}${artist} ${album}\" target=\"_blank\"><div class=\"youtube\"><i class=\"fab fa-youtube\"></i></div></a>`;
}