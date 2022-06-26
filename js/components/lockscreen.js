import { desktop } from "./desktop.js";

function lockscreen() {
    $("main").empty().append(`
    <div class="photo">
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="time"></div>
    <div class="times">
        <p class="t" id="txt"></p>
        <p class="d" id="date"></p>
    </div>
    <div class="time"></div>
    <div class="time"></div>
    <!-- <div class="time"></div> -->
</div>
    `);

     startTime();
    //  load_desktop();

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        m = checkTime(m);
        document.getElementById('txt').innerHTML = h + ":" + m;
        var t = setTimeout(startTime, 500);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        };
        return i;
    }

    var options = {
        day: 'numeric',
        year: 'numeric',
        month: 'long'
    };
    var today1 = new Date();

    //This is Date Method
    // document.getElementById('date').innerHTML = (today1.toLocaleDateString("en-US")); //

    //This is Date Method

    document.getElementById('date').innerHTML = (today1.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016


    $(document).on("click", ".photo", ()=>{          
        $(".photo").slideUp(()=>{load_desktop()}); 
    });                                              


    function load_desktop() {
        desktop();
    }

}

export {
    lockscreen
}