"use strict";var topBtn=document.querySelector(".topBtn");function goTop(e){function scrollUp(){currentY=window.pageYOffset,0===currentY?clearInterval(intervalID):scrollBy(0,-step)}e.preventDefault();var currentY=window.pageYOffset,step=1<200/currentY?10:100,timeStep=200/currentY*step,intervalID=setInterval(scrollUp,timeStep)}function init(){topBtn.addEventListener("click",goTop)}init();