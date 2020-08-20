const rentalStepContainer = document.querySelectorAll(".rentalStep__stepContainer");

function listFadeOut(index) {
    const stepList = rentalStepContainer[index].querySelectorAll(".stepList");

    for (let i = 0; i < stepList.length; i++) {
        stepList[i].style.transitionDelay = `${(stepList.length*0.1)-(i*0.1)}s`;
        stepList[i].style.transform = "translateY(30%)";
        stepList[i].style.opacity = 0;
    }
}

function listFadeIn(index) {
    const stepList = rentalStepContainer[index].querySelectorAll(".stepList");

    for (let i = 0; i < stepList.length; i++) {
        stepList[i].style.transitionDelay = `${i*0.3}s`;
        stepList[i].style.transform = "translateY(0)";
        stepList[i].style.opacity = 1;
    }
}

function showList() {
    const scrollY = window.pageYOffset; /*ie...*/

    if (scrollY >= 600) {
        listFadeIn(1);
    } else if (scrollY < 600) {
        listFadeOut(1);
    }

    if (scrollY >= 1460) {
        listFadeIn(2);
    } else if (scrollY < 1460) {
        listFadeOut(2);
    }

    if (scrollY >= 1860) {
        listFadeIn(3);
    } else if (scrollY < 1860) {
        listFadeOut(3);
    }

    /*if (scrollY < 600) {
        listFadeOut(1);
    }
    if (scrollY < 1460) {
        listFadeOut(2);
    }
    if (scrollY < 1860) {
        listFadeOut(3);
    }*/
}

function init() {
    window.addEventListener("load",()=>{
        const pageLoad = setTimeout(listFadeIn(0),200);
        clearTimeout(pageLoad);
    });
    window.addEventListener("scroll", showList);
}

init();
