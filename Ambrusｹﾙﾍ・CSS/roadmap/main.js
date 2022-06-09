var currentImg = 1;

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  currentImg = 1;
});

var glitchDiv = document.getElementById("glitch");

function left(){
  if(currentImg>1){
    currentImg--;
    document.getElementById("left-ani").style.transform = "translateX(-100px)";
    document.getElementById("rm-left").style.opacity = "0";
    glitchDiv.style.display = "block";
    glitchDiv.style.background = "url(./"+currentImg+".jpg)";
    glitchDiv.style.backgroundSize = "cover";
    glitchDiv.style.backgroundPosition = "center";
    setTimeout(function(){
        glitchDiv.style.opacity = "0.6";
        glitch.style.animation = "glitch-anim-1-horizontal 0.98s";
    }, 10);
    setTimeout(function(){
        document.getElementById("rm-content").style.background = "url(./"+currentImg+".jpg)";
        document.getElementById("rm-content").style.backgroundSize = "cover";
        document.getElementById("rm-content").style.backgroundPosition = "center";
    }, 500);
    setTimeout(function(){
        document.getElementById("rm-left").style.opacity = "1";
        document.getElementById("left-ani").style.transform = "translateX(0)";
        glitchDiv.style.opacity = "0";
        glitchDiv.style.display = "none";
    }, 1000);
    console.log(currentImg);
  }
}

function right(){
  if(currentImg<5){
    currentImg++;
    document.getElementById("left-ani").style.transform = "translateX(-100px)";
    document.getElementById("rm-left").style.opacity = "0";
    glitchDiv.style.display = "block";
    glitchDiv.style.background = "url(./"+currentImg+".jpg)";
    glitchDiv.style.backgroundSize = "cover";
    glitchDiv.style.backgroundPosition = "center";
    setTimeout(function(){
      glitchDiv.style.opacity = "0.6";
      glitch.style.animation = "glitch-anim-1-horizontal 0.98s";
    }, 10);
    setTimeout(function(){
      document.getElementById("rm-content").style.background = "url(./"+currentImg+".jpg)";
      document.getElementById("rm-content").style.backgroundSize = "cover";
      document.getElementById("rm-content").style.backgroundPosition = "center";
    }, 500);
    setTimeout(function(){
        document.getElementById("rm-left").style.opacity = "1";
        document.getElementById("left-ani").style.transform = "translateX(0)";
        glitchDiv.style.opacity = "0";
        glitchDiv.style.display = "none";
    }, 1000);
    console.log(currentImg);
  }
}