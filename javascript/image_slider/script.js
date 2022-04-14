const img = document.querySelector("#img-id")
images = [
    "717608.png",
    "996677.jpg",
    "1067764.png"
]

var count = 0
function backward(){
    count--;
    if(count < 0){
        count = images.length - 1;
    }
    img.src = images[count];
}

function forward(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    img.src = images[count];
}