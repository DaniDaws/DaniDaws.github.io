document.addEventListener("DOMContentLoaded", () => {
  const loadHTML = (url, selector) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching ${url}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch((error) => console.error("Error loading content:", error));
  };

  loadHTML("header.html", "header");
  loadHTML("footer.html", "footer");
});
