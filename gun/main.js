var canvas = document.getElementById("GameCanvasScreen");
var ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "black"; // 캔버스의 배경색을 검은색으로 설정

var sunRadius = canvas.width / 10; // 태양의 반지름 (canvas 너비의 10분의 1)
var earthRadius = sunRadius / 5; // 지구의 반지름 (태양의 반지름의 5분의 1)
var moonRadius = earthRadius / 2; // 달의 반지름 (지구의 반지름의 절반)

var rotEarth = 0;
var rotMoon = 0;
var rotSun = 0;  // 태양 자전 각도
var earthSpin = 0; // 지구 자전 각도

function draw() {
    rotEarth += Math.PI / 200; // 지구 공전 속도
    rotMoon += Math.PI / 100; // 달 공전 속도
    rotSun += Math.PI / 200; // 태양 자전 속도
    earthSpin += Math.PI / 180; // 지구 자전 속도

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 태양 그리기
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2); // 태양을 캔버스의 정중앙에 위치시킴
    ctx.rotate(rotSun); // 태양 자전 적용
    ctx.fillStyle = "red";
    ctx.fillRect(-sunRadius / 2, -sunRadius / 2, sunRadius, sunRadius); // 태양 크기
    ctx.restore();

    // 지구 공전
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2); // 캔버스 중앙으로 이동
    ctx.rotate(rotEarth); // 태양 주위를 공전
    ctx.translate(0, -200); // 태양으로부터의 거리 및 위치 조정

    // 지구 자전
    ctx.save();
    ctx.rotate(earthSpin); // 자전 각도 적용
    ctx.fillStyle = "green";
    ctx.fillRect(-earthRadius / 2, -earthRadius / 2, earthRadius, earthRadius); // 지구 크기

    // 달 공전
    ctx.save();
    ctx.rotate(rotMoon); // 지구 주위를 공전
    ctx.translate(25, 0); // 지구로부터의 거리 조정
    ctx.fillStyle = "grey";
    ctx.fillRect(-moonRadius / 2, -moonRadius / 2, moonRadius, moonRadius); // 달 크기
    ctx.restore(); // 달 공전 변환 복원

    ctx.restore(); // 지구 자전 변환 복원

    ctx.restore(); // 지구 공전 변환 복원

    requestAnimationFrame(draw);
}

draw();
