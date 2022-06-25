import { coming_soon } from "./coming_soon.js";

function menu() {
    $(".desktop").append(`
   <div class="box">
 <nav role='navigation'>
   <ul>
     <li>
       <a id="menu_search">
         <i class="fad fa-search fa-fw icon"></i>
         Search
       </a>
     </li>
     <li>
       <a id="menu_share">
       <i class="fad fa-draw-circle fa-fw icon"></i>
        Share
       </a>
     </li>
     <li>
       <a id="menu_start">
       <i class="fab fa-windows fa-fw icon"></i>
         Start
       </a>
     </li>
     <li>
     <a id="menu_web">
     <i class="fad fa-globe fa-fw icon"></i>
       Website
     </a>
   </li>
     <li>
       <a id="menu_settings">
         <i class="fad fa-cog fa-spin icon"></i>
         Settings
       </a>
     </li>
   </ul>
 </nav>   
 </div>
 
 
 <!-- date -->
 <div class="date"> </div>
`);

    var b = document.querySelector('.box'),
        d = document.querySelector('.date');

    // clock and date
    function clock() {
        var cT = new Date(),
            cD = cT.getDate(),
            cH = cT.getHours(),
            cM = cT.getMinutes(),
            cS = cT.getSeconds(),
            cA = cT.getFullYear();

        cM = (cM < 10 ? '0' : '') + cM;
        cS = (cS < 10 ? '0' : '') + cS;
        cH = (cH > 12) ? cH - 12 : cH;
        cH = (cH === 0) ? 12 : cH;
        // get Clock
        var clk = cH + ':' + cM;

        // array  days
        var w = new Array(7);
        w = [
            'Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];

        // get day
        var day = w[cT.getDay()];

        // array months
        var m = new Array(12);
        m = [
            'January', 'February', 'March',
            'April', 'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'December'
        ];
        // get Month
        var month = m[cT.getMonth()];

        // Render html
        d.innerHTML =
            '<div class="clock">' + clk + '</div>' +
            '<ul class="day">' +
            '<li>' + day + '</li>' +
            '<li>' + cD + ' of ' + month + '</li>' +
            '</ul>';
    }

    // menu 
    function menu(e) {
        if (e.clientX > 1270) {
            b.classList.add('show');
            d.classList.add('showClock');
            clock();
        } else if (e.clientX < 1150) {
            b.classList.remove('show');
            d.classList.remove('showClock');

        }
    }
    // get function on mouse move
    document.onmousemove = menu;

    $(document).on("click", "#menu_start",()=>{
        coming_soon();
    });
    
    $(document).on("click", "#menu_search",()=>{
        coming_soon();
    });

    $(document).on("click", "#menu_share",()=>{
        coming_soon();
    });
    
    $(document).on("click", "#menu_web",()=>{
        coming_soon();
    });

    $(document).on("click", "#menu_settings",()=>{
        coming_soon();
    });

}

export {
    menu
}