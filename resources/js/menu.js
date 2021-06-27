/** Seleciona o doc html, quando tiver carregado ativa a função */
/** No jQuery, vamos mudar a propriedade CSS do menu usando jQuery, já que habilitamos a transição de CSS, ele deve cuidar da animação deslizante sem o animation do jQuery. **/
$(document).ready(function(){

    $(function () {
        var menu_width = 1024;
        var menu = $(".menu");
        var menu_open = $(".open-menu");
        var menu_close = $(".menu-close");
        var overlay = $(".overlay");
       
        menu_open.click(function (e) {
          e.preventDefault();
          menu.css({"right": "0px"});
          overlay.css({"opacity": "1", "width": "100%"});
        });
        
        menu_close.click(function (e) {
          e.preventDefault();
          menu.css({"right": "-" + menu_width + "px"});
          overlay.css({"opacity": "0", "width": "0"});
        });
      });   

       //Efeito para virar os cards
    
      $(".card-grid").flip({
        trigger: "manual"
      });
      
      $(".flip").click(function() {
        $(this)
          .closest(".card-grid")
          .flip(true);
      });
      
      $(".unflip").click(function() {
        $(this)
          .closest(".card-grid")
          .flip(false);
      });
});



