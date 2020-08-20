const ticketingBtn = document.querySelectorAll(".ticketingBtn");

function popUpTicketing(e){
    e.preventDefault();
    
    //여기서 this하면 클릭한 버튼이 들어오는데 this를 기준으로 거슬러올라가서 ${play.no}변수를 구함
    //구한변수 ${play.no}을 밑줄 window.open에 꽂아줌 
    window.open("ticketing.html","ticketing",'toolbar = no, location = no, status = no, menubar = no, resizable = no, scrollbars = no, width = 1060, height = 845')
}

function init(){
    ticketingBtn.forEach(function(e){
        e.addEventListener("click",popUpTicketing);
    })
}

init();