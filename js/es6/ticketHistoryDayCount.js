const contReserve = document.querySelector(".cont__reserve"),
      ticketInfoContainer = contReserve.querySelectorAll(".ticket__infoContainer");

function getDay(e){
    const dDayBox = e.querySelector(".dDayBox"),
          timerContainer = e.querySelector(".infoContainer__timerContainer"),
          timerIcon = timerContainer.querySelector("i"),
          timer = timerContainer.querySelector(".timerContainer__timer");
    
    const dDayBoxText = dDayBox.innerText,
          dDayBoxTextArray = dDayBoxText.split("-"),
          dDayYear = parseInt(dDayBoxTextArray[0]),
          dDayMonth = parseInt(dDayBoxTextArray[1])-1,
          dDayDate = parseInt(dDayBoxTextArray[2])+1;
    
    const toDay = new Date(),
          dDay = new Date(dDayYear,dDayMonth,dDayDate),
          countDate = (dDay - toDay) / 1000,
          dDate = Math.floor(countDate / (60 * 60 * 24));
    
    if(dDate > 0){
        timer.innerText = `D-${dDate}`;
    }else if(dDate <= 0){
        timerIcon.classList.remove("fa-sync-alt");
        timerIcon.classList.remove("fa-spin");
        timerIcon.classList.add("fa-bell");
        timer.innerText = `D-Day`;
        timerContainer.style.color = "#d32e2e";
    }
}


function showDday(){
    ticketInfoContainer.forEach(getDay);
}


function init(){
    showDday();
    setInterval(showDday,1000);
}


init();