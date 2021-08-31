const clock = document.querySelector('.clock');
const sessionX = document.querySelector('.session');

function setClock() {
  let realTime = new Date();
  
  let sec = realTime.getSeconds();
  let min = realTime.getMinutes();
  let hr = realTime.getHours();
  
  let session = "";
  
  if(sec <= 9) {
    sec = "0" + sec;
  }
  
  if(min <= 9) {
    min = "0" + min;
  }
  
  if(hr > 12) {
    hr = hr - 12;
    session = "pm";
  } else {
    session = "am";
  }
  
  
  clock.innerHTML = `${hr}:${min}:${sec}`;
  sessionX.innerHTML = session;
  
  setInterval(setClock, 1000);
}

setClock();


