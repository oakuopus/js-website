document.body.style.backgroundColor = "#000000"; 
document.body.style.margin = "0";

header = document.createElement("header");
document.body.appendChild(header);
header.style.width = "100%";
header.style.height = "12vh";
header.style.backgroundColor = "gray";
header.style.display= "flex"

headLogo = document.createElement("img")
header.appendChild(headLogo)
headLogo.src="./logo.png";
headLogo.style.width = "10vh"
headLogo.style.height = "10vh"
headLogo.style.padding = "4px"
headLogo.style.marginLeft = "1rem"

discord = document.createElement("a")
discord.innerHTML = "Discord"
discord.href = "https://discord.com/"
header.appendChild(discord)

gallery = document.createElement("a")
gallery.innerHTML = "Gallery"
gallery.href = "https://discord.com/"
header.appendChild(gallery)

gallery.classList.add("nav");
discord.classList.add("nav")
nav = querySelectorAll(.nav)
nav.style.color = "white"
nav.style.padding = "3.5vh 2vw 2.5rem 5vh"
nav.style.fontSize = "2rem"
nav.style.textDecoration = "none";



main = document.createElement("main")





