let artist = encodeURIComponent(document.querySelector(".artist").innerText);
let album = encodeURIComponent(document.querySelector(".albumTitle").innerText);
let searchLink = window.innerWidth > 600 ? "https://music.youtube.com/search?q=" : "vnd.youtube.music://search?q=";

document.querySelector(".albumLinks").innerHTML += `<div class=\"albumLinksFlex\"><a href=\"${searchLink}${artist} ${album}\" rel=\"nofollow\" target=\"_blank\" title=\"YTM\" data-track-action=\"YTM\"><div class=\"albumButton youtube\"><i class=\"fab fa-youtube\"></i><span>Youtube Music</span></div></a></div>`;