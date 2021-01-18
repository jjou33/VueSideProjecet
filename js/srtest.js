const li = document.querySelector(".sr"),
      buttontest = document.querySelector("#btn"),
      temp = "showing";

const startDate = "20210115161001",
      endDate   = "20210115161159";


function showing(event) {
    li.classList.add(temp);
}
function clicktest() {
    buttontest.addEventListener("click", showing);
}

function change() {
    const date = new Date();

    year = date.getFullYear();
    month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

    today = year + "" + month + "" + date + "" + hour + "" + min + "" + sec;
    // console.log(today);
    // console.log(startDate);
    // console.log(endDate);
    if((eval(today) >= eval(startDate)) && ((eval(today) < eval(endDate)))) {
        console.log("안지남");
        li.classList.add(temp);
    } else {
    }
}
function getTime() {
    // 데이트 함수 생성
    const now = new Date();
    
    // year = now.getFullYear();
    // month = now.getMonth() + 1;
    // if((month+"").length < 2) {
    //     month = "0" + month;
    // }
    // date = now.getDate();
    // if((date+"").length < 2) {
    //     date="0" + date;
    // }
    // hour = now.getHours();
    // if((hour+"").length < 2) {
    //     hour="0" + hour;
    // }
    year = now.getFullYear();
    month = now.getMonth() < 10 ? `0${now.getMonth() + 1}` : now.getHours() + 1;
    date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
    hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
    min = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    sec = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();

    today = year + "" + month + "" + date + "" + hour + "" + min + "" + sec;
    console.log(startDate);
    console.log(today);
    console.log(endDate);
    if((eval(today) >= eval(startDate)) && ((eval(today) < eval(endDate)))) {
        console.log("안지남");
        li.classList.add(temp);
    } else {
        console.log("지남");
        li.classList.remove(temp);
    }
}

function getTime2() {
    const date = new Date();

    year = date.getFullYear();
    month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getHours() + 1;
    hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    
    console.log(today);
    console.log(startDate);
    console.log(endDate);
    if((eval(today) >= eval(startDate)) && ((eval(today) < eval(endDate)))) {
        console.log("안지남");
        li.classList.add(temp);
    } else {
    }
}
function init() {
    setInterval(getTime, 1000);
}

init();