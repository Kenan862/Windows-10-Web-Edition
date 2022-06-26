import {
    clock
} from "./clock.js";
import {
    context_menu
} from "./context_menu.js";
import {
    flex_cards
} from "./flex_cards.js";
import {
    full_screen
} from "./full_screen.js";
import {
    menu
} from "./menu.js";
import {
    deviceCheck
} from "./deviceCheck.js";
import {
    start_menu
} from "./start_menu.js";
import {
    taskbar_buttons
} from "./taskbar_buttons.js";
import {
    coming_soon
} from "./coming_soon.js";
import { settings } from "./settings.js";

function desktop() {
    $("main").empty().append(`<div class="desktop"></div>
    <div class="taskbar">
        <div class="area_1">
            <div class="start_btn"><i class="fab fa-windows"></i></div>
            <input type="text" id="search" placeholder="&#128269;&nbsp;Search the Windows WEB">
        </div>
        <div class="area_2">
            <div class="task_btt" id="task_view"></div>
        </div>
        <div class="area_3">
            <div class="act_btn"><i class="fad fa-angle-up"></i></div>
            <div class="act_btn"><i class="fad fa-battery-full"></i></div>
            <div class="act_btn"><i class="fad fa-wifi"></i></div>
            <div class="act_btn"><i class="fad fa-volume"></i></div>
            <div class="t_clock"></div>
            <div class="act_btn"><i class="fad fa-comment-alt"></i></div>
        </div>
    </div>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
    integrity='sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=='
    crossorigin='anonymous'></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit-icons.min.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="./js/main.js" type="module"></script>
    `);
    setTimeout(() => {
        taskbar_buttons();
        clock();
        menu();
        start_menu();
        flex_cards();
        // deviceCheck();
        $(document).on("contextmenu", context_menu);
        // $(document).one("click", "body", full_screen);
        $(document).on("click", ".act_btn", coming_soon);
        $(document).on("click", "#app_1", coming_soon);
        $(document).on("click", "#app_2", coming_soon);
        $(document).on("click", "#app_3", settings);
        $(document).on("click", "#task_view", coming_soon);

    }, 500);    
}

export{desktop}