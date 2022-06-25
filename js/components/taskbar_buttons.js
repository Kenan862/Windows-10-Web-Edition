function taskbar_buttons() {
    
    //Default value
    let buttons_count = 4;
    for(let i = 1; i < buttons_count; i++){
        $(".area_2").append(`<div class="task_btt" id="app_${i}"></div>`);
    }

    $("#app_3").empty().append(`<i class="fad fa-cog"></i>`);
}

export{taskbar_buttons}