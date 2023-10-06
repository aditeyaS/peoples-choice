const animeMap = new Map();
const movieMap = new Map();
const seriesMap = new Map();

favAnimeID = '';
favAnimeName = '';
favAnimeCount = 0;

favMovieID = '';
favMovieName = '';
favMovieCount = 0;

favSeriesID = '';
favSeriesName = '';
favSeriesCount = 0;

peopleChoiceData.forEach(data => {
    // anime
    if (animeMap.has(data.favAnimeID))
        animeMap.set(data.favAnimeID, animeMap.get(data.favAnimeID) + 1);
    else
        animeMap.set(data.favAnimeID, 1);

    if (animeMap.get(data.favAnimeID) > favAnimeCount) {
        favAnimeID = data.favAnimeID;
        favAnimeName = data.favAnime;
        favAnimeCount = animeMap.get(data.favAnimeID);
    }

    console.log(data.favMovieID)
    // movie
    if (movieMap.has(data.favMovieID))
        movieMap.set(data.favMovieID, movieMap.get(data.favMovieID) + 1)
    else
        movieMap.set(data.favMovieID, 1)

    if (movieMap.get(data.favMovieID) > favMovieCount) {
        favMovieID = data.favMovieID;
        favMovieName = data.favMovie;
        favMovieCount = movieMap.get(data.favMovieID);
    }

    // series
    if (seriesMap.has(data.favSeriesID))
        seriesMap.set(data.favSeriesID, seriesMap.get(data.favSeriesID) + 1)
    else
        seriesMap.set(data.favSeriesID, 1)

    if (seriesMap.get(data.favSeriesID) > favSeriesCount) {
        favSeriesID = data.favSeriesID;
        favSeriesName = data.favSeries;
        favSeriesCount = seriesMap.get(data.favSeriesID);
    }
});


// setting total votes
document.getElementById('total-votes').innerHTML = 'Total votes: ' + peopleChoiceData.length

// setting anime data
document.getElementById('anime-name').innerHTML = favAnimeName
document.getElementById('anime-vote-count').innerHTML = favAnimeCount
document.getElementById('anime-link').href = `https://www.themoviedb.org/tv/${favAnimeID}/`

// setting movie data
document.getElementById('movie-name').innerHTML = favMovieName
document.getElementById('movie-vote-count').innerHTML = favMovieCount
document.getElementById('movie-link').href = `https://www.themoviedb.org/movie/${favMovieID}/`

// setting series data
document.getElementById('series-name').innerHTML = favSeriesName
document.getElementById('series-vote-count').innerHTML = favSeriesCount
document.getElementById('series-link').href = `https://www.themoviedb.org/tv/${favSeriesID}/`