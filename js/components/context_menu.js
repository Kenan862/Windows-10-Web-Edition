function context_menu() {
    $("main").append(`<div id="context-menu">
    <div class="item">
      <i class="fad fa-cut"></i> Cut
    </div>
    <div class="item">
      <i class="fad fa-clone"></i> Copy
    </div>
    <div class="item">
      <i class="fad fa-paste"></i> Paste
    </div>
    <div class="item">
    <i class="fad fa-trash"></i> Delete
    </div>
    <hr>
    <div class="item">
    <i class="fad fa-sync"></i> Reload
    </div>
  </div>`);

  window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("active");
});
window.addEventListener("click", function () {
  document.getElementById("context-menu").classList.remove("active");
});


}
export {
    context_menu
}