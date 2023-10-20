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

  populateTable(
    `${categoryName}-table`,
    data,
    `https://www.themoviedb.org/${categoryName}/`
  );
}

document.getElementById("defaultOpen").click();

// animeData = animeData.slice(0, 3);

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

document.getElementById("contributor-credits").innerHTML = `${
  peopleChoiceData.length - 1
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
