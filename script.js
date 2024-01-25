function displayTime(){
    var date=new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    var time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').textContent = time;

}
function padZero(num) {
    return (num < 10 ? '0' : '') + num;
  }

  setInterval(displayTime, 1000); 