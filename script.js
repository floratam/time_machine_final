window.onscroll = function() {myFunction()};

function myFunction(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/* i am so aware that there is probably a much better way to go
about this instead of brute force - the code is undeniably inefficient
but it is the only way i knew how to do this i am sorry! :((( */

window.onload = function(){
  $("p").css("opacity", "0");

  $(".side-header").hover(textEnter0, textExit0);

  $(".SFIRE").hover(textEnter1, textExit1);
  $(".Nothing").hover(textEnter2, textExit2);
  $(".BIPP").hover(textEnter3, textExit3);
  $(".Hey").hover(textEnter4, textExit4);
  $(".Vroom").hover(textEnter5, textExit5);
  $(".Product").hover(textEnter6, textExit6);
  $(".Yeah").hover(textEnter7, textExit7);
  $(".OIL").hover(textEnter8, textExit8);
  $(".Slime").hover(textEnter9, textExit9);
}

function textEnter0(){
  $(".pside-header").css("opacity", "100");
}

function textExit0(){
  $(".pside-header").css("opacity", "0");
}



function textEnter1(){
  $(".pSFIRE").css("opacity", "100");
}

function textExit1(){
  $(".pSFIRE").css("opacity", "0");
}



function textEnter2(){
  $(".pNothing").css("opacity", "100");
}

function textExit2(){
  $(".pNothing").css("opacity", "0");
}



function textEnter3(){
  $(".pBIPP").css("opacity", "100");
}

function textExit3(){
  $(".pBIPP").css("opacity", "0");
}



function textEnter4(){
  $(".pHey").css("opacity", "100");
}

function textExit4(){
  $(".pHey").css("opacity", "0");
}



function textEnter5(){
  $(".pVroom").css("opacity", "100");
}

function textExit5(){
  $(".pVroom").css("opacity", "0");
}



function textEnter6(){
  $(".pProduct").css("opacity", "100");
}

function textExit6(){
  $(".pProduct").css("opacity", "0");
}



function textEnter7(){
  $(".pYeah").css("opacity", "100");
}

function textExit7(){
  $(".pYeah").css("opacity", "0");
}



function textEnter8(){
  $(".pOil").css("opacity", "100");
}

function textExit8(){
  $(".pOil").css("opacity", "0");
}



function textEnter9(){
  $(".pSlime").css("opacity", "100");
}

function textExit9(){
  $(".pSlime").css("opacity", "0");
}