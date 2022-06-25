function power(){
    swal("Turn off computer", {
        buttons: {
          cancel: "Cancel",
          restart: {
            text: "Restart",
            value: "restart",
          },
          PowerOff: true,
        },
      })
      .then((value) => {
        switch (value) {
       
          case "restart":
            $("body").empty().css({
              "background": "black",
              "transition": "0.5s",
              "cursor":"none",
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
            break;
       
          case "PowerOff":
            $("body").empty().css({
              "background": "black",
              "transition": "0.5s",
              "cursor":"none",
          });
            break;
       
        }
      });
}

export {power}