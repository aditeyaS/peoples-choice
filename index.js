const animeData = [];
const movieData = [];
const seriesData = [];

//fetch data
peopleChoiceData.forEach((data) => {
  // anime
  if (data.favAnime != null && data.favAnimeID != null) {
    if (!animeData.find((item) => item.id === data.favAnimeID)) {
      animeData.push({ id: data.favAnimeID, name: data.favAnime, count: 1 });
    } else {
      animeData.find((item) => item.id === data.favAnimeID).count++;
    }
  }

  // movie
  if (data.favMovie != null && data.favMovieID != null) {
    if (!movieData.find((item) => item.id === data.favMovieID)) {
      movieData.push({ id: data.favMovieID, name: data.favMovie, count: 1 });
    } else {
      movieData.find((item) => item.id === data.favMovieID).count++;
    }
  }

  // series
  if (data.favSeries != null && data.favSeriesID != null) {
    if (!seriesData.find((item) => item.id === data.favSeriesID)) {
      seriesData.push({ id: data.favSeriesID, name: data.favSeries, count: 1 });
    } else {
      seriesData.find((item) => item.id === data.favSeriesID).count++;
    }
  }
});

// Sort arrays by count
animeData.sort((a, b) => b.count - a.count);
movieData.sort((a, b) => b.count - a.count);
seriesData.sort((a, b) => b.count - a.count);

// changing tabs
function changeCategory(evt, categoryName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(`${categoryName}-data`).style.display = "block";
  evt.currentTarget.className += " active";

  let data =
    categoryName === "anime"
      ? animeData
      : categoryName === "movie"
        ? movieData
        : seriesData;

  let linkPrefix =
    categoryName === "movie"
      ? "https://www.themoviedb.org/movie/"
      : "https://www.themoviedb.org/tv/";

  populateTable(
    `${categoryName}-table`,
    data,
    linkPrefix
  );
}

document.getElementById("defaultOpen").click();

// animeData = animeData.slice(0, 3);

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

document.getElementById("backToTopBtn").onclick = function() {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for Chrome
};

// Populate tables
function populateTable(tableId, data, linkPrefix) {
  const table = document.getElementById(tableId);
  data.forEach((item) => {
    const row = table.insertRow();
    row.setAttribute("data-aos", "fade-right");
    const nameCell = row.insertCell(0);
    const countCell = row.insertCell(1);
    const linkCell = row.insertCell(2);

    nameCell.textContent = item.name;
    countCell.innerHTML = `<i class="fa fa-heart" style="color: red;"></i> ${item.count}`;
    linkCell.innerHTML = `<a href="${linkPrefix}${item.id}/" target="_blank"><i class="fa fa-external-link"></i></a>`;
  });
}

document.getElementById("contributor-credits").innerHTML = `${peopleChoiceData.length - 1
  } contributors`;

// animation of header
let textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\s\\])/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
      10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
// Function to filter data based on the search input
function filterData(searchTerm, data) {
  searchTerm = searchTerm.toLowerCase();
  return data.filter((item) => item.name.toLowerCase().includes(searchTerm));
}
// Function to show the search results
function showSearchResults() {
  const searchResults = document.getElementById("search-results");
  const input1 = document.getElementById("input");
  // searchResults.style.display = "block";
  input1.addEventListener("focus", showSearchResults);

  if (input1.value === "") {
    searchResults.style.display = "none";
  } else {
    searchResults.style.display = "block";
  }
}



// Event listener for input focus
// const input1 = document.getElementById("input");
// input1.addEventListener("focus", showSearchResults);


// Function to display search results
function displaySearchResults(searchResults) {
  const searchResultsTable = document.getElementById("search-results-table");
  searchResultsTable.innerHTML = '';

  if (searchResults.length === 0) {
    const noResultsRow = document.createElement('tr');
    noResultsRow.innerHTML = '<td>No results found</td>';
    searchResultsTable.appendChild(noResultsRow);
  } else {
    searchResults.forEach((item) => {
      const row = document.createElement('tr');
      const nameCell = row.insertCell(0);
      const ratingCell = row.insertCell(1);
      const linkCell = row.insertCell(2);

      nameCell.textContent = item.name;
      ratingCell.innerHTML = `<i class="fa fa-heart" style="color: red;"></i> ${item.count}`;
      linkCell.innerHTML = `<a href="https://www.themoviedb.org/tv/${item.id}" target="_blank"><i class="fa fa-external-link"></i></a>`;

      searchResultsTable.appendChild(row);
    });
  }
}



// Event listener for input changes
const input = document.getElementById("input");
input.addEventListener("input", function () {
  const searchTerm = this.value;
  let searchResults;

  if (searchTerm) {
    // Perform the search for anime, movies, and series
    const animeSearchResults = filterData(searchTerm, animeData);
    const movieSearchResults = filterData(searchTerm, movieData);
    const seriesSearchResults = filterData(searchTerm, seriesData);

    // Combine the results from all categories
    searchResults = [...animeSearchResults, ...movieSearchResults, ...seriesSearchResults];
  } else {
    // If the search input is empty, clear the search results
    searchResults = [];
  }

  // Display the search results
  displaySearchResults(searchResults);
});
