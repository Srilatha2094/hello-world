const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    // Enter key code is 13
    performSearch();
  }
});

function performSearch() {
  const query = searchInput.value;
  // perform the search using the query
  console.log("Performing search for:", query);
}
