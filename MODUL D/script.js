const onKeyDown = (key) => {};

const onMouseMove = (e) => {};

document.addEventListener("keydown", onKeyDown);
document.addEventListener("click", onMouseMove);

const body = document.getElementById("body");
const scoreSidebar = document.getElementById("score-sidebar");
const timeSidebar = document.getElementById("time-sidebar");
const heartSidebar = document.getElementById("heart-sidebar");
const cooldown = document.getElementById("cooldown");
const btnQuit = document.getElementById("quit");

// Init Banteng Image
const bantengImage = new Image();
bantengImage.src = "./assets/pdip.png";
bantengImage.width = 150;
bantengImage.height = 150;
bantengImage.onload = () => {
  drawImageOnRandomBox();
};
let bantengX;
let bantengY;
let bantengClicked = false;

// Init Timer
let seconds = 0;
let minutes = 0;
let formattedTime;
let intervalId;

// Init Score
let score = 0;
let lives = 5;

// Init Canvas
const map = document.getElementById("canvas");
const ctx = map.getContext("2d");
map.addEventListener("click", handleCanvasClick);

function handleCanvasClick(event) {
  const mouseX = event.clientX - map.getBoundingClientRect().left;
  const mouseY = event.clientY - map.getBoundingClientRect().top;

  console.log("mouseX : ", mouseX);
  console.log("mouseY : ", mouseY);

  // Check if the click is on the banteng
  if (
    mouseX >= bantengX &&
    mouseX <= bantengX + bantengImage.width &&
    mouseY >= bantengY &&
    mouseY <= bantengY + bantengImage.height
  ) {
    console.log("rawr");

    if (!bantengClicked) {
      increaseScore();
      playSound();
      bantengClicked = true;

      // Clicked on the banteng
      //   changeBantengImage();
      drawImageOnRandomBox();
    }
  } else {
    // Clicked on an empty box
    console.log("decreased");
    decreaseLives();
  }
}

map.width = 800;
map.height = 586;

ctx.fillStyle = "green";
ctx.fillRect(0, 0, map.width, map.height);

// Draw box column and rows
const drawImageOnRandomBox = () => {
  const numRows = 3;
  const numCols = 3;

  // Clear the area where the previous banteng was drawn
  ctx.clearRect(bantengX, bantengY, bantengImage.width, bantengImage.height);

  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, map.width, map.height);

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const x = col * (map.width / numCols);
      const y = row * (map.height / numRows);

      ctx.strokeStyle = "black";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, map.width / numCols, map.height / numRows);
    }
  }

  const randomRow = Math.floor(Math.random() * numRows);
  const randomCol = Math.floor(Math.random() * numCols);

  const randomX = randomCol * (map.width / numCols) + bantengImage.width / 2;
  const randomY = randomRow * (map.height / numRows);

  bantengX = randomX;
  bantengY = randomY;
  bantengClicked = false;

  // Draw banteng image
  ctx.drawImage(
    bantengImage,
    randomX,
    randomY,
    bantengImage.width,
    bantengImage.height
  );
};

// Change the banteng image
const changeBantengImage = () => {
  bantengImage.src = "./assets/pdi.png";
};

// Timer Function
const startTimer = () => {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    updateTimerDisplay();
  }, 1000);
};

// Update Timer Function
const updateTimerDisplay = () => {
  formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  timeSidebar.textContent = ` ${formattedTime}`;
};

// Increase Score
const increaseScore = () => {
  score++;
  scoreSidebar.innerHTML = `${score}`;
};

const updateScoreDisplay = () => {
  scoreSidebar.innerHTML = `${score}`;
};

// Play Sound
const playSound = () => {
  const audio = new Audio(
    "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
  );
  audio.play();
};

// Decrease Live
const decreaseLives = () => {
  lives--;
  updateLivesDisplay();

  if (lives === 0) {
    const scoreMessage = `Your score: ${score}`;
    localStorage.setItem("score", score);
    localStorage.setItem("times", formattedTime);

    const confirmation = window.confirm(
      `${scoreMessage}\n\nDo you want to restart?`
    );

    if (confirmation) {
      restartGame();
    } else {
      alert("Game over!");
      window.location.reload();
    }
  }
};

const restartGame = () => {
  lives = 5;
  score = 0;
  seconds = 0;
  minutes = 0;

  updateLivesDisplay();
  updateScoreDisplay();
  updateTimerDisplay();
  updateHighScoreDisplay();
};

// Update live display (heart)
const updateLivesDisplay = () => {
  for (let i = 1; i <= 5; i++) {
    const heartIcon = document.getElementById(`heart${i}`);
    if (i <= lives) {
      // Full heart
      heartIcon.classList.add("fas");
      heartIcon.classList.remove("far");
    } else {
      // Empty heart
      heartIcon.classList.remove("fas");
      heartIcon.classList.add("far");
    }
  }
};

const updateHighScoreDisplay = () => {
  const storedName = localStorage.getItem("name") || "-";
  const storedScore = localStorage.getItem("score") || 0;
  const storedTimes = localStorage.getItem("times") || "00:00";

  let usersData = [];

  const currentUser = {
    name: storedName,
    score: storedScore,
    times: storedTimes,
  };

  usersData.push(currentUser);
  console.log(usersData);

  const table = document.getElementById("table");

  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  const row = table.insertRow(1);

  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);

  cell1.textContent = "1"; // Rank
  cell2.textContent = storedName;
  cell3.textContent = storedScore;
  cell4.textContent = storedTimes;
};

updateHighScoreDisplay();
