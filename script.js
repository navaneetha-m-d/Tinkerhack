const alarmButton=document.getElementById("alarmButton");
const stopButton=document.getElementById("stopButton");
alarmButton.onclick=function(){
    var alarm=document.getElementById("alarmSound");
    alarm.play();
    alert("Trigger Alarm Button Clicked!");
};
stopButton.onclick=function(){
    var alarm=document.getElementById("alarmSound");
    alarm.pause();
    alarm.currentTime=0;
    alert("Stop Alarm Button Clicked!");
};
function dialEmergency(){
    const emergencyNumber= "6857394234"
    window.location.href='tel:${emergencyNumber}';
}