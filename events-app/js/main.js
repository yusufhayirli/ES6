const appleLink = document.getElementById("apple");
const strawberryLink = document.getElementById("strawberry");
const cherryLink = document.getElementById("cherry");
const photoApple = document.getElementById("photo-apple");
const photoStrawberry = document.getElementById("photo-strawberry");
const photoCherry = document.getElementById("photo-cherry");

//call element's attribute by using event
const photoClick = (event) => {
    const photoId = event.target.attributes['data-img'].value;
    const photo = document.getElementById(photoId);
    if (photo.className==="hide"){
        photo.className="";
    } else {
        photo.className="hide";
    }
}

appleLink.addEventListener("click", photoClick);

// () => {
//     photoStrawberry.className = "hide";
//     photoCherry.className = "hide";
//     if (photoApple.className === "hide") {
//         photoApple.className = "";
//     } else {
//         photoApple.className = "hide";
//     }
// }

strawberryLink.addEventListener("click", () => {
    photoApple.className = "hide";
    photoCherry.className = "hide";
    if (photoStrawberry.className === "hide") {
        photoStrawberry.className = "";
    } else {
        photoStrawberry.className = "hide";
    }
});

cherryLink.addEventListener("click", () => {
    photoApple.className = "hide";
    photoStrawberry.className = "hide";
    if (photoCherry.className === "hide") {
        photoCherry.className = "";
    } else {
        photoCherry.className = "hide";
    }
});