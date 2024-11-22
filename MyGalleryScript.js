
filterFunc("all")
function filterFunc(c){
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") {
    c = "";
    element = document.getElementById("replaceME");
    element.innerHTML = "Here's a look at everything! Everything should be organized neatly! (Hover your mouse over the art to elarge them)";
  }
  for (i = 0; i < x.length; i++){
    classRemover(x[i], "show");
    if (x[i].className.indexOf(c) > -1) classAddr(x[i], "show");
  }
  if (c == 'all'){
    element = document.getElementById("replaceME");
    element.innerHTML = "Here's a look at everything! Everything should be organized neatly! (your mouse over the art to elarge them)";
  }
  else if (c == 'birds'){
    element = document.getElementById("replaceME");
    element.innerHTML = "Cool Birds! (It may not look any different right now! Try scrolling down!)";
  }
  else if (c == 'VidArt'){
    element = document.getElementById("replaceME");
    element.innerHTML = "Here is some cover art for some cool videogames I like!";
  }
  else if (c == 'RegArt'){
    element = document.getElementById("replaceME");
    element.innerHTML = "Here's some paintings that are pretty sweet, some of these are pretty old!";
  }
  else if (c == 'Movi'){
    element = document.getElementById("replaceME");
    element.innerHTML = "Here are some cool movie posters! Some movies may contain frightening imagery and may be inappropriate for young viewers.";
  }
  else if (c == 'Book'){
    element = document.getElementById("replaceME");
    element.innerHTML = "You can't judge a book by its cover, but you can judge a cover by its cover!";
  }

}

function classAddr(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i]) == -1){element.className += " " + arr2[i];}
  }
}

function classRemover(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++){
    while (arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var buttonContainer = document.getElementById("theButtonContainer");
var buttons = buttonContainer.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    var curr = document.getElementsByClassName("active");
    curr[0].className = curr[0].className.replace(" active", "");
    this.className += " active";
  });
}
