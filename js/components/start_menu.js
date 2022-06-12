function start_menu() {
    $(document).on("click", ".start_btn", ()=>{
        launch_menu();
    });
    $(document).on("click", "#search", ()=>{
        launch_menu();
    });
    $(document).on("click",".desktop", ()=>{
        hide_menu();
    });

    function launch_menu(){
        $(".start_menu").slideToggle(200).css("display", "flex");
    }
    function hide_menu() {
        $(".start_menu").fadeOut(200,()=>{$(".start_menu").css("display", "none");});
    }

    document.onkeydown = checkKeycode;
  function checkKeycode(e) {
    var event = e || window.event;
    var keycode = event.which || event.keyCode;

    if (keycode == 91) {
      // return key was pressed
        launch_menu();
    }
  }
}

export {start_menu}