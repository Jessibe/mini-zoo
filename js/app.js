
document.getElementById("filtro").addEventListener("change", change);

function change(event) {
  var selectedIndex = event.target.selectedIndex;
  var filter = event.target[selectedIndex].dataset.filtro;
  if (filter == "black-white") {
    blackAndWhite();
  } else if (filter == "sepia") {
    changeSepia();
  }else if (filter == "negative-colors") {
    changeColors();
  }else if (filter === "no") {
    noFilter();
}
}

function noFilter() {
  var animals = document.getElementsByTagName("img");
  for (var i = 0; i < animals.length; i++) {
    animals[i].className = "none";
  }
}

function blackAndWhite() {
  var animals = document.getElementsByTagName("img");
  for (var i = 0; i < animals.length; i++) {
    animals[i].className = "gray";
  }
}

function changeSepia() {
  var animals = document.getElementsByTagName("img");
  for (var i = 0; i < animals.length; i++) {
    animals[i].className = "sepia";
  }
}

function changeColors() {
  var animals = document.getElementsByTagName("img");
  for (var i = 0; i < animals.length; i++) {
    animals[i].className = "colors";
  }
}

/*document.getElementById("select").addEventListener("change", filter);

function filter(){
  var animals=document.getElementsByTagName("img")
   if (select.value == 'sepia') {
      changeSepia();
    }else if (select.value == 'white-black') {
      changeWb();
    }else if (select.value == 'negative-colors') {
      changeNegative();
    }
  }
}

function changeSepia() {
  var animals = document.getElementsByTagName("img");
  for (var i = 0; i < animals.length; i++) {
    animals[i].className = "sepia";*/
