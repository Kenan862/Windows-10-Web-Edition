function start_menu() {
    $(document).on("click", ".start_btn", ()=>{
        $(".start_menu").slideToggle(200).css("display", "flex");
    });
}

export {start_menu}