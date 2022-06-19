function flex_cards() {
    $(".option").click(function(){
        $(".option").removeClass("active");
        $(this).addClass("active");
        
     });
     
}
export{flex_cards}