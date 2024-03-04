document.body.style.backgroundColor = "#000000"; //set the background colors and margin
document.body.style.margin = "0";

var main = document.createElement("main")
document.body.appendChild(main)

let header = document.createElement("header"); // create element header
main.appendChild(header);
header.style.width = "100%"; // set header bar across top of the screen
header.style.height = "auto";
header.style.backgroundColor = "gray";
header.style.display= "flex"

let headLogo = document.createElement("img") //create logo tag
header.appendChild(headLogo)
headLogo.src="./logo.png"; // create logo with .src into the headLogo
headLogo.style.width = "5rem" // modify the logo
headLogo.style.height = "5rem"
headLogo.style.padding = "1rem 0 1rem 1vw"
headLogo.style.marginLeft = "1rem"

let discord = document.createElement("a") // create first link/navigation
discord.innerHTML = "Discord" // add text
discord.href = "https://discord.com/" //add href into 
discord.setAttribute("class", "nav") //set the class "nav" using set attribute
header.appendChild(discord) // append nav lettering to nav bar

let gallery = document.createElement("a") // create second link/navigation
gallery.innerHTML = "Gallery" // all the same as previous
gallery.href = "https://discord.com/"
gallery.setAttribute("class", "nav")
header.appendChild(gallery)

var nav = document.querySelectorAll(".nav") //use query selector to search dom for all tags with class of nav
for(let i=0; i < nav.length; i++){ // use for loop for the length of the amount of classes
    nav[i].style.color = "white" // systematically apply styles to all tags with class nav
    nav[i].style.padding = "4vh 0 3vh 2vw"
    nav[i].style.fontSize = "250%"
    nav[i].style.textDecoration = "none"
}

div = document.createElement("div") //create main section
div.style.height = "80vh"
main.appendChild(div)

var video = document.createElement("iframe"); // create iframe tag 
video.src = "https://www.youtube.com/embed/XHTrLYShBRQ?si=YShXhf154BJl5lag"; // add link to video
video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"; // iframe yap
video.setAttribute("height", "90%") // set width and height through setAttribute
video.setAttribute("width", "90%")
video.style.margin = "auto" // modify video css to center it
video.style.justifyContent = "center"
video.style.display = "flex"
video.style.position = "relative"
video.style.top = "3rem"
div.appendChild(video);

var footer = document.createElement("footer") //create footer tag
footer.innerHTML = "Kuopus Incorporated | 2024 | Javascript Limited" //add footer text with .innerHTML
footer.style.color = "white" // modify footer css
footer.style.justifyContent = "center"
footer.style.borderTop = "white 1px solid"
footer.style.display = "flex"
footer.style.fontWeight = "300"
main.appendChild(footer) //append footer to body


// that is all


































































var secret = document.createElement("button")
secret.setAttribute("onclick", "btn()")
secret.style.width = "1vw"
secret.style.height = "1vh"
secret.style.display = "flex"
secret.style.position = "fixed"
secret.style.bottom = "0"
secret.style.right = "0"
secret.style.backgroundColor = "black"
secret.style.border = "none"
document.body.appendChild(secret)

var trick = document.querySelector("main")

var secretxt = document.createElement("div")
secretxt.innerHTML = "You found the secret text."
secretxt.style.display= "flex"
secretxt.style.justifyContent = "center"
secretxt.style.margin = "auto"
secretxt.style.fontSize = "1000%"
secretxt.style.color = "black"
document.body.appendChild(secretxt)

var btn = () => {
    trick.style.display = trick.style.display == "none" ? "block" : "none"
    document.body.style.backgroundColor = document.body.style.backgroundColor == "white" ? "black" : "white"
    if(trick.style.display == "none"){secretxt.style.display = "block"}else{secretxt.style.display = "none"}
}



