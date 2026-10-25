console.log("Java Script is nice");


// Open the overlay

function openOverlay() {
    const overlay = document.getElementById("overlay-menu");
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
}

// function openOverlay() {
//     const overlay = document.getElementById("overlay-menu");
//     overlay.style.width = "100vw";
//     overlay.style.height = document.documentElement.scrollHeight + "40px";
// }

// Close the overlay 
function closeOverlay () {
    document.getElementById("overlay-menu").style.width = "0";
}

// function closeOverlay() {
//     const overlay = document.getElementById("overlay-menu");
//     overlay.style.width = "0";
//     overlay.style.height = document.documentElement.scrollHeight + "40px";
// }