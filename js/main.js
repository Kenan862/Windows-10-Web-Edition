import { battery } from "./components/battery.js";
import { clock } from "./components/clock.js";
import { control_panel } from "./components/control_panel.js";
import { desktop_context_menu } from "./components/desktop_context_menu.js";
import { flex_cards } from "./components/flex_cards.js";
import { full_screen } from "./components/full_screen.js";
import { start_menu } from "./components/start_menu.js";
import { taskbar_buttons } from "./components/taskbar_buttons.js";
import { window_function } from "./components/window_function.js";

$(document).ready(() => {
  taskbar_buttons();
  clock();
  battery();
  start_menu();
  flex_cards();
  $(document).one("click", "body", full_screen);
  $(document).contextmenu(desktop_context_menu);
  $(document).on("click", "#app_1", window_function);
  $(document).on("click", ".act_btn", control_panel);
});
