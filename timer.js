const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
    timer: document.getElementById("timer-1"),
};

class CountdownTimer {

    constructor({ targetDate, selector }) {
    this.targetDate = targetDate;
        this.selector = selector;
       
    }


    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        this.component(deltaTime);
        this.timeFinish(deltaTime)
        
    }, 250);
        

    component(deltaTime) {
    
    const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    
    const hours = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
    const mins = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    
    const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    
     refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
    }
    

    pad(value) {
    return String(value).padStart(2, '0');    
    }

    timeFinish(deltaTime) {
    if (deltaTime <= 0) {
      clearInterval(this.intervalId);
      refs.timer.textContent = "Yeeaaaah, New Year has Come!!!"
      refs.timer.setAttribute("style", "font-size: 40px; color: red");
    }
  }
}

 
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date('Jan 01 ,2022'),
});

console.log(new Date())
