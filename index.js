document.body.style.backgroundColor = "#000000"; 
document.body.style.margin = "0";

let header = document.createElement("header");
document.body.appendChild(header);
header.style.width = "100%";
header.style.height = "12vh";
header.style.backgroundColor = "gray";
header.style.display= "flex"

let headLogo = document.createElement("img")
header.appendChild(headLogo)
headLogo.src="./logo.png";
headLogo.style.width = "10vh"
headLogo.style.height = "10vh"
headLogo.style.padding = "4px"
headLogo.style.marginLeft = "1rem"

let discord = document.createElement("a")
discord.innerHTML = "Discord"
discord.href = "https://discord.com/"
discord.style.color = "white"
discord.style.padding = "3.5vh 2vw 2.5rem 3vw"
discord.style.fontSize = "2rem"
discord.style.textDecoration = "none"
header.appendChild(discord)

let gallery = document.createElement("a")
gallery.innerHTML = "Gallery"
gallery.href = "https://discord.com/"
gallery.style.color = "white"
gallery.style.padding = "3.5vh 2vw 2.5vh 2vw"
gallery.style.fontSize = "2rem"
gallery.style.textDecoration = "none"
header.appendChild(gallery)

main = document.createElement("main")
main.style.height = "100vh"
document.body.appendChild(main)

var video = document.createElement("iframe");
video.src = "https://www.youtube.com/embed/XHTrLYShBRQ?si=YShXhf154BJl5lag";
video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
video.setAttribute("height", "90%")
video.setAttribute("width", "90%")
video.style.margin = "auto"
video.style.justifyContent = "center"
video.style.display = "flex"
video.style.marginTop = "2rem"
main.appendChild(video);









