const dragItem = document.getElementById("dragItem");
const dropZones = document.querySelectorAll(".dropzone");

dragItem.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", dragItem.id);
});

dropZones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.classList.add("hovered");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("hovered");
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    zone.appendChild(draggedElement);
    zone.classList.remove("hovered");
  });
});
