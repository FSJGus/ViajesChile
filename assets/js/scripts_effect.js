$("#textPromo1, #textPromo2, #textPromo3, #textPromo4").hide();
$(document).ready(function () {
    //Función para las cards. Hide and Show.
    $("#imgCard1").mouseover(function () {
      $("#textPromo1").css("color","white");
      $("#textPromo1").slideDown("slow");
    });

    $("#imgCard2").mouseover(function () {
        $("#textPromo2").css("color","white");
        $("#textPromo2").slideDown("slow");
      });

      $("#imgCard3").mouseover(function () {
        $("#textPromo3").css("color","white");
        $("#textPromo3").slideDown("slow");
      });

      $("#imgCard4").mouseover(function () {
        $("#textPromo4").css("color","white");
        $("#textPromo4").slideDown("slow");
      });
      
  $("#imgCard1, #imgCard2, #imgCard3, #imgCard4").mouseout(function () {
    $("#textPromo1").slideUp("slow");
  });
  $("#imgCard2").mouseout(function () {
    $("#textPromo2").slideUp("slow");
  });
  $("#imgCard3").mouseout(function () {
    $("#textPromo3").slideUp("slow");
  });
  $("#imgCard4").mouseout(function () {
    $("#textPromo4").slideUp("slow");
  });

  //Funcionalidad para el Navbar cuando se hace scroll down.
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
});
