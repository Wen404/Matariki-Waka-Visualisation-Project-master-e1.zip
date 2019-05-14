
$.ajax({
  url: "https://matarikiwaka-functions.azurewebsites.net/api/waka/current",
}).done(function(data) {
  for (var i = 0; i < 7; i++) {
    var isactive = data.starModes[i].isActive;
    var starmode = data.starModes[i].starMode;
    if (isactive == true) {
      break;
    }
  }

  doAction(starmode);
  //return activestarmode;
});
console.log();

var stardesc = ["Eyes of God", "Salt Water", "Fresh Water", 
"That which grows in the sky", "That which grows in the ground", 
"Wind and weather", "Water that pools in the sky"];

$(document).ready(function() {

});

// add by Andy
function doAction(starmode){
  /*
    switch (starmode) {
      case "Matariki": defaultScreen(starmode, 0);
      case "Waitaa": defaultScreen(starmode, 1);
      case "Waitii": defaultScreen(starmode, 2);
      case "Tapu-aa-rangi": defaultScreen(starmode, 3);
      case "Tapu-aa-nuku": defaultScreen(starmode, 4);
      case "Ururangi": defaultScreen(starmode, 5);
      case "Waipuna-aa-rangi": defaultScreen(starmode, 6);
      break;
    }
    */
  
    if (starmode == "Matariki") {
        defaultScreen(starmode, 0);
    }
    if (starmode == "Waitaa") {
        defaultScreen(starmode, 1);
    }
    if (starmode == "Waitii") {
        defaultScreen(starmode, 2);
    }
    if (starmode == "Tupuaarangi") {
        defaultScreen("Tapu-aa-rangi", 3);
    }
    if (starmode == "Tupuaanuku") {
        defaultScreen("Tapu-aa-nuku", 4);
    }
    if (starmode == "Ururangi") {
        defaultScreen(starmode, 5);
    }
    if (starmode == "Waipunaaarangi") {
        defaultScreen("Waipuna-aa-rangi", 6);
    }
  
    function defaultScreen(starmode, i) {
  
      console.log(i);
  
      $('#content').load('html/' + starmode + '.html');
      document.getElementById("title").innerHTML = starmode;
      document.getElementById("desc").innerHTML = stardesc[i];
      changeBackground(starmode);
    }
  
    $('#links a').click(function() {
      var url = $(this).attr('href');
      urlsplit = url.split('&');
      var page = urlsplit[0];
      var desc = urlsplit[1];
      //alert(urlsplit);
  
      $('#content').load('html/' + page + '.html');
  
      document.getElementById("title").innerHTML = page;
      document.getElementById("desc").innerHTML = desc;
  
      changeBackground(page);
  
      urlsplit = [];
  
      return false;
  
  
  
    });
}

function changeBackground(page) {
  if (page == "Matariki"){
      document.getElementById("background").className = "matariki";
  }
  if (page == "Waitaa"){
      document.getElementById("background").className = "waitaa";
  }
  if (page == "Waitii"){
      document.getElementById("background").className = "waitii";
  }
  if (page == "Tapu-aa-rangi"){
      document.getElementById("background").className = "tapu-aa-rangi";
  }
  if (page == "Tapu-aa-nuku"){
      document.getElementById("background").className = "tapu-aa-nuku";
  }
  if (page == "Ururangi"){
      document.getElementById("background").className = "ururangi";
  }
  if (page == "Waipuna-aa-rangi"){
      document.getElementById("background").className = "waipuna-aa-rangi";
  }
}
