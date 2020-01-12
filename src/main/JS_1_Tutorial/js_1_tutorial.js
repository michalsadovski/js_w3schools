


function h1_settings(chapterTitle) {
const h1 = document.querySelector('h1');
h1.textContent = chapterTitle;
h1.style.fontSize = '25px';
h1.style.letterSpacing = '3px';
h1.style.backgroundColor = "lightgrey";
}
h1_settings('Button switch');


function buttonSwitch() {
  const imageDisplay = document.createElement('img');
  img.src = "/kurs-javascript-samuraj/src/main/apps/project_7_paper_rock_scissors/images/paper.jpg";
  document.querySelector('.imageDisplay').appendChild(img);
}


document.querySelector('.buttonOn').addEventListener('click', buttonSwitch());

