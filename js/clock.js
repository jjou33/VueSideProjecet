const clockContainer = document.querySelector(".js-clock")
      , clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
    const date = new Date();
    const min = date.getMinutes();
    const hour = date.getHours();
    const sec = date.getMilliseconds();
    const sec2 = date.getSeconds();
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec2 < 10 ? `0${sec2}` : sec2}`
}

function init() {
    setInterval(getTime, 100);
}

init();