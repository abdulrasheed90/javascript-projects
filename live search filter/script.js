function filterList() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const items = document.querySelectorAll("#list li");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? "" : "none";
  });
}
