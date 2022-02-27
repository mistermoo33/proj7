
const leftD = document.querySelector(".left")
const rightD = document.querySelector(".right")
const resetCenter = function(){
    console.log("hi")
    leftD.style.transition = ""
    rightD.style.transition = ""
    leftD.style.width = "50vw"
    rightD.style.width = "50vw"
}



leftD.addEventListener("mouseover", function(){
    leftD.style.transition = "width linear 1s"
    rightD.style.transition = "width linear 1s"
     leftD.style.width = "75vw";
     rightD.style.width = "25vw";
     rightD.style.zIndex = "0"
     leftD.style.zIndex="1";
}) 

rightD.addEventListener("mouseover", function(){
     rightD.style.width = "75vw";
     leftD.style.width = "25vw";
     leftD.style.zIndex = "0"
     rightD.style.zIndex="1";
}) 

leftD.addEventListener("mouseout",function(){
    rightD.style.width = "50vw";
    leftD.style.width = "50vw";

})

rightD.addEventListener("mouseout",function(){
    rightD.style.width = "50vw";
     leftD.style.width = "50vw";

})




window.addEventListener("resize",function(){
    leftD.style.transition = "width ease-in 0s";
    rightD.style.transition = "width ease-in 0s";
    rightD.style.width = "50vw";
    leftD.style.width = "50vw";
})