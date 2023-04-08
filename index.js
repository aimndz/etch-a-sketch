const containerEl = document.getElementById("container");
const newCanvasBtnEl = document.getElementById("new-cnvs-btn");

// Default
let canvasSize = 16;
createCanvas(canvasSize);

function createCanvas(numOfRow) {
  for (let i = 0; i < numOfRow; ++i) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < numOfRow; ++i) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      row.appendChild(pixel);
    }

    containerEl.appendChild(row);
  }

  // Hover Color
  const pixelEl = document.getElementsByClassName("pixel");

  for (let i = 0; i < pixelEl.length; ++i) {
    pixelEl[i].addEventListener("mouseover", function () {
      pixelEl[i].style.backgroundColor = "blue";
    });
  }
}

newCanvasBtnEl.addEventListener("click", function () {
  canvasSize = prompt("Enter the size of canvas: ");

  if (canvasSize <= 100) {
    clearCanvas();
    createCanvas(canvasSize);
  } else {
    alert("Canvas size is too large, input again.");
  }
});

function clearCanvas() {
  while (containerEl.firstChild) {
    containerEl.removeChild(containerEl.firstChild);
  }
}
