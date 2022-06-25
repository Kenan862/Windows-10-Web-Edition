import {power} from "./power.js";

function flex_cards() {
    $("#app_launch").children().eq(0).empty().append(`<h1>Coming Soon...</h1>`);
    
    $(".option").click(function(){
        $(".option").removeClass("active");
        $(this).addClass("active");
        
        if($(this).attr('id') == "power_menu"){
            $(this).children().eq(0).empty().append(`<button class="sbutton noselect" id="shut_down"><span class='text'>Power</span><span class="icon"><i class="fad fa-power-off"></i></span></button>`);
        }else{
            $("#power_menu").children().eq(0).empty();
        }

        if($(this).attr('id') == "app_launch"){
            $(this).children().eq(0).empty().append(`<h1>Coming Soon...</h1>`);
        }else{
            $("#app_launch").children().eq(0).empty();
        }

        if($(this).attr('id') == "productivity"){
            $(this).children().eq(0).empty().append(`<h1>Coming Soon...</h1>`);
        }else{
            $("#productivity").children().eq(0).empty();
        }

        if($(this).attr('id') == "pin"){
            $(this).children().eq(0).empty().append(`<h1>Coming Soon...</h1>`);
        }else{
            $("#pin").children().eq(0).empty();
        }

        if($(this).attr('id') == "settings"){
            $(this).children().eq(0).empty().append(`<h1>Coming Soon...</h1>`);
        }else{
            $("#settings").children().eq(0).empty();
        }
       
        $(document).on("click", "#shut_down", power); 
    });
}
export{flex_cards}