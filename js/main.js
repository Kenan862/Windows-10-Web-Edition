import { full_screen } from "./components/full_screen.js";
import { taskbar_buttons } from "./components/taskbar_buttons.js";

$(document).ready(() => {
   $(document).one("click","body", full_screen);
    taskbar_buttons();
});
