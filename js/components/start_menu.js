function start_menu() {
  $("body").append(`<div class="start_menu">
  <div class="options">
      <div class="option" style="--optionBackground:url(https://cdn.wallpapersafari.com/26/28/hV4Oj1.jpg);">
         <div class="shadow"></div>
         <div class="label">
            <div class="icon">
               <i class="bi bi-power"></i>
            </div>
            <div class="info">
               <div class="main">Power menu</div>
               <div class="sub">Shut down or restart your pc</div>
            </div>
         </div>
      </div>
      <div class="option active" style="--optionBackground:url(https://cdn.wallpapersafari.com/26/28/hV4Oj1.jpg);">
         <div class="shadow"></div>
         <div class="label">
            <div class="icon">
               <i class="bi bi-window"></i>
            </div>
            <div class="info">
               <div class="main">Application Launcher</div>
               <div class="sub">Launch applications</div>
            </div>
         </div>
      </div>
      <div class="option" style="--optionBackground:url(https://cdn.wallpapersafari.com/26/28/hV4Oj1.jpg);">
         <div class="shadow"></div>
         <div class="label">
            <div class="icon">
               <i class="bi bi-building"></i>
            </div>
            <div class="info">
               <div class="main">Productivity</div>
               <div class="sub">Office and more</div>
            </div>
         </div>
      </div>
      <div class="option" style="--optionBackground:url(https://cdn.wallpapersafari.com/26/28/hV4Oj1.jpg);">
         <div class="shadow"></div>
         <div class="label">
            <div class="icon">
               <i class="bi bi-pin-fill"></i>
            </div>
            <div class="info">
               <div class="main">Pinned apps</div>
               <div class="sub">launch your pinned apps</div>
            </div>
         </div>
      </div>
      <div class="option" style="--optionBackground:url(https://cdn.wallpapersafari.com/26/28/hV4Oj1.jpg);">
         <div class="shadow"></div>
         <div class="label">
            <div class="icon">
               <i class="bi bi-sliders"></i>
            </div>
            <div class="info">
               <div class="main">Quick Settings</div>
               <div class="sub">Customize your start menu</div>
            </div>
         </div>
      </div>
   </div>
   <div class="credit"><h4>Start Menu(Concept)</h4></div>
  </div>`);

  $(document).on("click", ".start_btn", () => {
    launch_menu();
  });
  $(document).on("click", "#search", () => {
    launch_menu();
  });
  $(document).on("click", ".desktop", () => {
    hide_menu();
  });

  function launch_menu() {
    $(".start_menu").slideToggle(200).css("display", "flex");
  }
  function hide_menu() {
    $(".start_menu").fadeOut(200, () => {
      $(".start_menu").css("display", "none");
    });
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

export { start_menu };
