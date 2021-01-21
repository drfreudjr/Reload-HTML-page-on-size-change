// refreshing page automatically when viewport size change 
 cl = console.log;

let href = window.location.href.split("/")  // dump url into array
let html_location = href[href.length-1]     // grab last element

if (window.innerWidth >= 960 && html_location !== "shell.html") {
    window.location = "shell.html";
}

if (window.innerWidth < 960 && html_location !== "shell2.html") {
    window.location = "shell2.html";
}


var timeOut = null;

window.onresize = function(){
    if (timeOut != null)
        clearTimeout(timeOut);

    timeOut = setTimeout(function(){
          document.location.reload(true);
	  console.log("here");
    }, 500);
};
