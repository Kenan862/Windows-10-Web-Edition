function taskbar_buttons() {
    
    //Default value
    let buttons_count = 4;
    for(let i = 1; i < buttons_count; i++){
        $(".area_2").append(`<div class="task_btt" id="app_${i}"></div>`);
    }

    $(document).on("click", ".start_btn", ()=>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 3000,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'warning',
            title: 'Coming Soon!',
          })
    });

}

export{taskbar_buttons}