const mainScreen = document.getElementById("mainScreen");
const gameScreen = document.getElementById("gameScreen");
const startGameBtn = document.getElementById("startGameBtn");
const leftCanvas = document.getElementById("leftCanvas");
const rightCanvas = document.getElementById("rightCanvas");
const leftCtx = leftCanvas.getContext("2d");
const rightCtx = rightCanvas.getContext("2d");
const timerBar = document.getElementById("timerBar");
const timerText = document.getElementById("timerText");
const findCount = document.getElementById("findCount");
const scoreDisplay = document.getElementById("scoreDisplay");
const result = document.getElementById("result");
const nextLevelBtn = document.getElementById("nextLevelBtn");
const levelTitle = document.getElementById("levelTitle");
const isMobile = window.innerWidth < 640;

let currentLevel = 1;
let score = 0;
let foundDifferences = 0;
let totalDifferences = 5;
let timeRemaining = 60;
let timerInterval;
let isDrawing = false;
let path = [];
let currentLeftImage = null;
let currentRightImage = null;
let originalImageWidth = 0;
let originalImageHeight = 0;
let scaleRatioX = 1;
let scaleRatioY = 1;

// 정답
const answers = [
  [
    { x: 2056, y: 1856, r: 90 },
    { x: 4796, y: 1252, r: 90 },
    { x: 6044, y: 3188, r: 90 },
    { x: 3908, y: 3380, r: 90 },
    { x: 6080, y: 5492, r: 90 },
  ],
  [
    { x: 912, y: 1832, r: 90 },
    { x: 6256, y: 2096, r: 90 },
    { x: 7092, y: 1748, r: 90 },
    { x: 2666, y: 1775, r: 90 },
    { x: 4728, y: 3120, r: 90 },
  ],
  [
    { x: 996, y: 1410, r: 90 },
    { x: 1236, y: 1766, r: 90 },
    { x: 2174, y: 1188, r: 90 },
    { x: 1828, y: 1184, r: 90 },
    { x: 2404, y: 290, r: 90 },
  ],
];

const foundAnswers = new Set();

// 게임 시작 버튼
startGameBtn.addEventListener("click", () => {
  mainScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  startLevel(1);
});

// 다음 레벨
nextLevelBtn.addEventListener("click", () => {
  nextLevelBtn.classList.add("hidden");
  result.innerText = "";
  startLevel(currentLevel + 1);
});

function calculateCanvasSize() {
  const header = document.querySelector("header");
  const headerHeight = header.getBoundingClientRect().height;
  const availableWidth = window.innerWidth;
  const availableHeight = window.innerHeight - headerHeight;

  // 원본 이미지 비율
  const imageRatio = originalImageHeight / originalImageWidth;
  const maxSingleWidth = availableWidth / 2;

  // 비율에 따라 캔버스 크기 계산
  let canvasWidth = maxSingleWidth;
  let canvasHeight = canvasWidth * imageRatio;

  // 높이가 사용 가능한 높이를 초과하면, 높이를 기준으로 너비 재계산
  if (canvasHeight > availableHeight) {
    canvasHeight = availableHeight;
    canvasWidth = canvasHeight / imageRatio;
  }

  return {
    width: canvasWidth,
    height: canvasHeight,
    scaleX: canvasWidth / originalImageWidth,
    scaleY: canvasHeight / originalImageHeight,
  };
}

// 캔버스와 이미지를 다시 그리기기
function resizeAndRedrawCanvases() {
  const canvasSize = calculateCanvasSize();

  [leftCanvas, rightCanvas].forEach((canvas) => {
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
    canvas.style.width = `${canvasSize.width}px`;
    canvas.style.height = `${canvasSize.height}px`;
  });

  // 이미지 다시 그리기
  if (currentLeftImage && currentRightImage) {
    leftCtx.drawImage(
      currentLeftImage,
      0,
      0,
      canvasSize.width,
      canvasSize.height
    );
    rightCtx.drawImage(
      currentRightImage,
      0,
      0,
      canvasSize.width,
      canvasSize.height
    );
  }

  // 배율 정보 업데이트
  scaleRatioX = canvasSize.scaleX;
  scaleRatioY = canvasSize.scaleY;
}

// 틀린 그림 찾기 시작
function startLevel(level) {
  currentLevel = level;
  levelTitle.innerText = `틀린 그림 찾기 ${level}번째 문제`;
  foundDifferences = 0;
  foundAnswers.clear();
  updateFindCount();

  const leftImage = new Image();
  const rightImage = new Image();

  // 틀린 그림 이미지
  leftImage.src = `./sources/${level}-1.jpg`;
  rightImage.src = `./sources/${level}-2.jpg`;

  leftImage.onload = () => {
    // 원본 이미지 크기 저장
    originalImageWidth = leftImage.naturalWidth;
    originalImageHeight = leftImage.naturalHeight;
    currentLeftImage = leftImage;

    // 두 이미지가 모두 로드되었는지 확인하고 크기 조정
    if (currentRightImage) {
      resizeAndRedrawCanvases();
    }
  };

  rightImage.onload = () => {
    currentRightImage = rightImage;

    // 두 이미지가 모두 로드되었는지 확인하고 크기 조정
    if (currentLeftImage && originalImageWidth > 0) {
      resizeAndRedrawCanvases();
    }
  };

  // 타이머 시작 및 재설정정
  resetTimer();
  startTimer();
}

// 타이머
function resetTimer() {
  timeRemaining = 60;
  timerText.innerText = "1:00";
  timerBar.style.width = "100%";
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;

    // 타이머 카운트다운 텍스트 업데이트
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerText.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // 타이머 바 업데이트
    const percentage = (timeRemaining / 60) * 100;
    timerBar.style.width = `${percentage}%`;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      result.innerText = "시간 초과!";
      result.className = "text-center mt-4 text-xl font-bold text-red-600";

      // 다음 레벨 버튼
      setTimeout(() => {
        if (currentLevel < 3) {
          startLevel(currentLevel + 1);
        } else {
          endGame();
        }
      }, 2000);
    }
  }, 1000);
}

function getCanvasCoordinates(e, canvas) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  let clientX, clientY;
  if (e.type.includes("touch")) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }

  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY,
  };
}

// 캔버스 클릭 이벤트
[leftCanvas, rightCanvas].forEach((canvas) => {
  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mouseup", handleMouseUp);

  // 모바일 캔버스 터치치
  canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
  canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
  canvas.addEventListener("touchend", handleTouchEnd, { passive: false });
});

// 터치 이벤트 처리
function handleTouchStart(e) {
  e.preventDefault();
  const canvas = e.target;
  const coords = getCanvasCoordinates(e, canvas);
  handleMouseDown(e, canvas);
}

function handleTouchMove(e) {
  e.preventDefault();
  if (!isDrawing) return;
  const canvas = e.target;
  const coords = getCanvasCoordinates(e, canvas);
  handleMouseMove(e, canvas);
}

function handleTouchEnd(e) {
  e.preventDefault();
  handleMouseUp(e);
}

function handleMouseDown(e) {
  isDrawing = true;
  const rect = e.target.getBoundingClientRect();
  const canvasX = e.clientX - rect.left;
  const canvasY = e.clientY - rect.top;

  path = [
    {
      x: canvasX,
      y: canvasY,
      canvas: e.target.id,
    },
  ];
}

function handleMouseMove(e) {
  if (!isDrawing) return;

  const rect = e.target.getBoundingClientRect();
  const canvasX = e.clientX - rect.left;
  const canvasY = e.clientY - rect.top;

  const point = {
    x: canvasX,
    y: canvasY,
    canvas: e.target.id,
  };

  path.push(point);

  const isLeft = point.canvas === "leftCanvas";
  const ctx = isLeft ? leftCtx : rightCtx;
  const canvas = isLeft ? leftCanvas : rightCanvas;
  const currentImage = isLeft ? currentLeftImage : currentRightImage;

  if (!currentImage) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(path[0].x, path[0].y);
  for (let p of path) {
    ctx.lineTo(p.x, p.y);
  }
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function handleMouseUp(e) {
  if (!isDrawing) return;
  isDrawing = false;

  let sumX = 0,
    sumY = 0;
  for (let p of path) {
    sumX += p.x;
    sumY += p.y;
  }
  const centerX = sumX / path.length;
  const centerY = sumY / path.length;

  let correct = false;
  let answeredIndex = -1;

  const currentAnswers = answers[currentLevel - 1];

  if (currentAnswers) {
    for (let i = 0; i < currentAnswers.length; i++) {
      const ans = currentAnswers[i];

      const scaledX = ans.x * scaleRatioX;
      const scaledY = ans.y * scaleRatioY;
      const scaledR = ans.r * ((scaleRatioX + scaleRatioY) / 2);

      const dx = centerX - scaledX;
      const dy = centerY - scaledY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= scaledR && !foundAnswers.has(i)) {
        correct = true;
        answeredIndex = i;
        break;
      }
    }
  } else {
    console.error("현재 레벨에 대한 정답이 없습니다:", currentLevel);
  }

  const isLeftCanvas = path[0].canvas === "leftCanvas";
  const ctx = isLeftCanvas ? leftCtx : rightCtx;
  const oppositeCtx = isLeftCanvas ? rightCtx : leftCtx;

  ctx.beginPath();
  ctx.moveTo(path[0].x, path[0].y);
  for (let p of path) {
    ctx.lineTo(p.x, p.y);
  }
  ctx.closePath();

  if (correct) {
    foundAnswers.add(answeredIndex);
    foundDifferences++;
    score += 200;

    ctx.strokeStyle = "red";
    ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
    ctx.fill();

    oppositeCtx.beginPath();
    oppositeCtx.arc(centerX, centerY, 15, 0, Math.PI * 2);
    oppositeCtx.strokeStyle = "red";
    oppositeCtx.fillStyle = "rgba(255, 0, 0, 0.2)";
    oppositeCtx.stroke();
    oppositeCtx.fill();

    updateFindCount();
    updateScore();

    result.innerText = "정답입니다!";
    result.className = "text-center mt-4 text-xl font-bold text-green-600";

    console.log(`틀린 그림 찾기: ${foundDifferences}/${totalDifferences}`);

    if (foundDifferences >= totalDifferences) {
      clearInterval(timerInterval);
      result.innerText = "모두 찾았습니다! 다음 문제로 이동하세요.";
      nextLevelBtn.classList.remove("hidden");
      console.log("다음 단계 버튼 보여야함!");

      if (currentLevel === 3) {
        endGame();
      }
    }
  } else {
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 3;
    score -= 50;
    updateScore();

    result.innerText = "틀렸습니다!";
    result.className = "text-center mt-4 text-xl font-bold text-red-600";
  }

  ctx.stroke();

  setTimeout(() => {
    if (!nextLevelBtn.classList.contains("hidden")) return;
    result.innerText = "";
  }, 1000);
}

function updateFindCount() {
  findCount.innerText = `${foundDifferences}/${totalDifferences}`;
}

function updateScore() {
  scoreDisplay.innerText = `점수: ${score}`;
}

// 게임 종료 처리
function endGame() {
  result.innerText = `게임 종료! 최종 점수: ${score}`;
  result.className = "text-center mt-4 text-2xl font-bold text-blue-600";

  nextLevelBtn.innerText = "다시 시작";
  nextLevelBtn.classList.remove("hidden");
  nextLevelBtn.addEventListener(
    "click",
    function restart() {
      nextLevelBtn.removeEventListener("click", restart);
      nextLevelBtn.innerText = "다음 문제";
      score = 0;
      updateScore();
      startLevel(1);
    },
    { once: true }
  );
}

// 화면 크기 변경 시 캔버스 다시 그리기
window.addEventListener("resize", () => {
  if (currentLeftImage && currentRightImage) {
    resizeAndRedrawCanvases();
  }
});

// 페이지가 로드될 때 크기 조정
window.addEventListener("DOMContentLoaded", () => {
  if (currentLeftImage && currentRightImage) {
    resizeAndRedrawCanvases();
  }
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (currentLeftImage && currentRightImage) {
      resizeAndRedrawCanvases();
    }
  }, 100);
});
