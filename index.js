
// my function 

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUl");
  li = ul.getElementsByClassName("servicee");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

//  tagline

const changingText = document.querySelector("#changing-text");

window.addEventListener("load", function(){
  changeText();
});

const textArr = ["CARPENTER", "ELECTRICIAN", "PLUMBER", "TURIST GUIDE", "COOK", "LAUNDRY", "TECHNICIAN", "MECHANIC", "HOMECARE", "SECURITY", "PAINTER"];

let index = 0;
let word = textArr[index];
let text = "";
let isDeleting = false;

function changeText() {
    if(isDeleting && text.length == 0) {
        index = (index + 1) % textArr.length;
        word = textArr[index];
        isDeleting = false;
    }

    if(text.length == word.length) {
        isDeleting = true;
    }

    text = isDeleting ? word.substring(0,text.length - 1) : word.substring(0,text.length + 1) ;
    changingText.innerHTML = text;
    setTimeout(changeText, text.length == word.length ? 1000 : 200);
}


var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  