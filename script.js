let project1 = document.querySelector(".project1");
let project2 =
document.querySelector(".project2");
let project3 = 
document.querySelector(".project3");


project1.onmouseenter = sizeScaleUp(project1)
project2.onmouseenter = sizeScaleUp(project2)
project3.onmouseenter = sizeScaleUp(project3)
project1.onmouseout = sizeScaleDown(project1)
project2.onmouseout = sizeScaleDown(project2)
project3.onmouseout = sizeScaleDown(project3)

function sizeScaleUp(element) {
element.style.opacity = "1";
element.style.height = "80%";
element.style.width = "85%";

}
function sizeScaleDown(element) {
element.style.opacity = "0.7";
element.style.height = "75%";
element.style.width = "80%";
}

function contactChange() {
}

  
// function mouseenter() {
// document.getElementById('project1');
// projectimages.style.opacity = "1";
// projectimages.style.height = "80%";
// projectimages.style.width = "85%";
// }

// function mouseexit() {
// document.getElementById('project1');
// projectimages.style.opacity = "0.7";
// projectimages.style.height = "75%";
// projectimages.style.width = "80%";
// }

function discordLink() {
console.log("hi")
}

function gmailLink() {
  
}

function githubLink() {
  
}

function projectLink1() {   window.open("https://IdioticGhost.github.io/Unit-6-Project","_blank")
}

function projectLink2() { window.open("https://IdioticGhost.github.io/Unit-9-Project","_blank")
}

function projectLink3() {   window.open("https://github.com/IdioticGhost/FLW-02.P-Unit-Project-Playlist.git","_blank")
}


//Was mostly working, was refactoring when asked to submit.