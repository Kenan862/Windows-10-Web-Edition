function deviceCheck() {

    battery();

    function battery() {
        navigator.getBattery().then((battery) => {
          function updateAllBatteryInfo() {
            updateChargeInfo();
            updateLevelInfo();
            updateChargingInfo();
            updateDischargingInfo();
          }
          updateAllBatteryInfo();
      
          battery.addEventListener("chargingchange", () => {
            updateChargeInfo();
          });
          function updateChargeInfo() {
            if(battery.charging == true) {
              $(".battery").removeClass("bi-battery-full").addClass("bi-battery-charging");
            }else{
              $(".battery").removeClass("bi-battery-charging").addClass("bi-battery-full");
            }
          }
      
          battery.addEventListener("levelchange", () => {
            updateLevelInfo();
          });
          function updateLevelInfo() {
            console.log("Battery level: " + battery.level * 100 + "%");
          }
      
          battery.addEventListener("chargingtimechange", () => {
            updateChargingInfo();
          });
          function updateChargingInfo() {
            console.log(
              "Battery charging time: " + battery.chargingTime + " seconds"
            );
          }
      
          battery.addEventListener("dischargingtimechange", () => {
            updateDischargingInfo();
          });
          function updateDischargingInfo() {
            console.log(
              "Battery discharging time: " + battery.dischargingTime + " seconds"
            );
          }
        });
      }
}

export {
    deviceCheck
}