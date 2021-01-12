const body = document.querySelector("body"); // Body HTML 태그 선택

const IMG_NUMBER = 3; // 이미지 갯수

function handleImgLoad() {
    console.log("finished loading");
}
// 화면에 이미지 삽입
function paintImage(imgNumber) {
    const image = new Image(); // image 객체 생성
    image.src = `../images/${imgNumber + 1}.jpg`; // 이미지 저장 경로 (절대)
    image.classList.add("bgImage");
    //body.appendChild(image); // body 태그의 하위에 image 삽입
    body.prepend(image);
}

// 숫자 랜덤 삽입
function generateRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = generateRandom();
    console.log(randomNumber);
    paintImage(randomNumber);

}
init();