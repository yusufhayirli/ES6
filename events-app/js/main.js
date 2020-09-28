const appleLink = document.getElementById("apple");
const strawberryLink = document.getElementById("strawberry");
const cherryLink = document.getElementById("cherry");
const photoApple = document.getElementById("photo-apple");
const photoStrawberry = document.getElementById("photo-strawberry");
const photoCherry = document.getElementById("photo-cherry");

//call element's attribute by using event and make 
//all images hide and the selected one appears in a loop
const photoClick = (event) => {
    const imgList = document.querySelectorAll('img');
    imgList.forEach((img) => {
        img.className="hide";
    })

    const photoId = event.target.attributes['data-img'].value;
    const photo = document.getElementById(photoId);
    if (photo.className==="hide"){
        photo.className="";
    } else {
        photo.className="hide";
    }
}

//can use "click" instead of mouseenter if you want to active them by clicking
appleLink.addEventListener("mouseenter", photoClick);
strawberryLink.addEventListener("mouseenter", photoClick);
cherryLink.addEventListener("mouseenter", photoClick);