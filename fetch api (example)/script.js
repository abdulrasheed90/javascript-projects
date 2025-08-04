function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then(data => {
      document.getElementById("output").innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
      `;
    })
    .catch(error => {
      document.getElementById("output").innerHTML = `
        <p style="color: red;">❌ Error loading data.</p>
      `;
    });
}
