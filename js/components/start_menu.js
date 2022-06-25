function start_menu() {
   $("main").append(`<div class="start_menu">
  <div class="options">
      <div class="option" id="power_menu" style="--optionBackground:url(https://img.freepik.com/free-vector/white-gold-hexagon-pattern-background_53876-115292.jpg?w=2000);">
      <div class="content"></div>   
      <div class="shadow"></div>
         <div class="label">
            <div class="icon">
            <i class="fad fa-power-off"></i>
            </div>
            <div class="info">
               <div class="main">Power menu</div>
               <div class="sub">Control your pc</div>
            </div>
         </div>
      </div>
      <div class="option active" id="app_launch" style="--optionBackground:url(https://img.freepik.com/free-vector/white-gold-hexagon-pattern-background_53876-115292.jpg?w=2000);">
      <div class="content"></div>      
      <div class="shadow"></div>
         <div class="label">
            <div class="icon">
            <i class="fad fa-window"></i>
            </div>
            <div class="info">
               <div class="main">Application Launcher</div>
               <div class="sub">Launch applications</div>
            </div>
         </div>
      </div>
      <div class="option" id="productivity" style="--optionBackground:url(https://img.freepik.com/free-vector/white-gold-hexagon-pattern-background_53876-115292.jpg?w=2000);">
      <div class="content"></div>      
      <div class="shadow"></div>
         <div class="label">
            <div class="icon">
            <i class="fad fa-briefcase"></i>
            </div>
            <div class="info">
               <div class="main">Productivity</div>
               <div class="sub">Office and more</div>
            </div>
         </div>
      </div>
      <div class="option" id="pin" style="--optionBackground:url(https://img.freepik.com/free-vector/white-gold-hexagon-pattern-background_53876-115292.jpg?w=2000);">
      <div class="content"></div>      
      <div class="shadow"></div>
         <div class="label">
            <div class="icon">
            <i class="fad fa-thumbtack"></i>
            </div>
            <div class="info">
               <div class="main">Pinned apps</div>
               <div class="sub">launch your pinned apps</div>
            </div>
         </div>
      </div>
      <div class="option" id="settings" style="--optionBackground:url(https://img.freepik.com/free-vector/white-gold-hexagon-pattern-background_53876-115292.jpg?w=2000);">
      <div class="content"></div>      
      <div class="shadow"></div>
         <div class="label">
            <div class="icon">
            <i class="fad fa-sliders-h"></i>
            </div>
            <div class="info">
               <div class="main">Quick Settings</div>
               <div class="sub">Customize your start menu</div>
            </div>
         </div>
      </div>
   </div>
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

export {
   start_menu
};