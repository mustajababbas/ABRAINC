
  const currentLocation = location.href;
  const menuItem=document.querySelectorAll('.nav-item a');
  const menuLength=menuItem.length
  for(let i=0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation){
       menuItem[i].className += " active";
    }
}

var sidenav = document.getElementById("mySidenav");
body = document.getElementsByTagName("body")[0];
sidenav.style.marginLeft = "-100%";

function openNav() {


  if(sidenav.style.marginLeft === "-100%"){

    sidenav.style.marginLeft = "0";
    body.style.overflow = "hidden";

  }

  else{

    sidenav.style.marginLeft = "-100%";
    body.style.overflow = "auto";

  }

 
  
}




var btn = $('.to-top');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(document).ready(function(){
    $("#openCookies").click(function(){
      $("#cookiesBanner").show();
    });

    $("#openPrivacy").click(function(){

      $("#privacyBanner").show();

    });

    $("#closeCookies,#rejectCookies,#acceptCookies").click(function(){
        $("#cookiesBanner").hide();
      });

      $("#closePrivacy,#rejectPrivacy,#acceptPrivacy").click(function(){
        $("#privacyBanner").hide();
      });
      
  });
       

  $("#register-tab").click(function(){

    $(".modal-dialog").css("maxWidth","900px")

  })

  $("#login-tab").click(function(){

    $(".modal-dialog").css("maxWidth","500px")

  })