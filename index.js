const animeData = [];
const movieData = [];
const seriesData = [];

peopleChoiceData.forEach(data => {
    // anime
    if (!animeData.find(item => item.id === data.favAnimeID)) {
        animeData.push({id: data.favAnimeID, name: data.favAnime, count: 1});
    } else {
        animeData.find(item => item.id === data.favAnimeID).count++;
    }

    // movie
    if (!movieData.find(item => item.id === data.favMovieID)) {
        movieData.push({id: data.favMovieID, name: data.favMovie, count: 1});
    } else {
        movieData.find(item => item.id === data.favMovieID).count++;
    }

    // series
    if (!seriesData.find(item => item.id === data.favSeriesID)) {
        seriesData.push({id: data.favSeriesID, name: data.favSeries, count: 1});
    } else {
        seriesData.find(item => item.id === data.favSeriesID).count++;
    }
});

// Sort arrays by count
animeData.sort((a, b) => b.count - a.count);
movieData.sort((a, b) => b.count - a.count);
seriesData.sort((a, b) => b.count - a.count);

// Populate tables
function populateTable(tableId, data, linkPrefix) {
    const table = document.getElementById(tableId);
    data.forEach(item => {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const countCell = row.insertCell(1);
        const linkCell = row.insertCell(2);
        
        nameCell.textContent = item.name;
        countCell.textContent = item.count;
        linkCell.innerHTML = `<a href="${linkPrefix}${item.id}/" class="tmdb-link" target="_blank">LINK <i class="fa fa-external-link"></i></a>`;

    });
}

populateTable('anime-table', animeData, 'https://www.themoviedb.org/tv/');
populateTable('movie-table', movieData, 'https://www.themoviedb.org/movie/');
populateTable('series-table', seriesData, 'https://www.themoviedb.org/tv/');


//updating animation of header

var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
