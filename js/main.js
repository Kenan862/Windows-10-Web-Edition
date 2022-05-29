import { battery } from "./components/battery.js";
import { clock } from "./components/clock.js";
import { desktop_context_menu } from "./components/desktop_context_menu.js";
import { full_screen } from "./components/full_screen.js";
import { taskbar_buttons } from "./components/taskbar_buttons.js";

$(document).ready(() => {
  taskbar_buttons();
  clock();
  battery();
  $(document).one("click", "body", full_screen);
    $(document).contextmenu(()=>{
        desktop_context_menu();
    });
});
