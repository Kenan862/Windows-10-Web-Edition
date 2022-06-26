import { lockscreen } from "./lockscreen.js";

function preloader() {
    $(".preloader").empty().append(`
    <div class="icon_preloader"><img src="/assets/logo.png"/></div>
    <div class="loader"><img src="/assets/loader.gif"/></div>
    `);

    
    
    setTimeout(() => {
    lockscreen();
    }, 5000); // 5000
}

export{preloader}