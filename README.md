# People's Choice

![App Logo](https://github.com/aditeyaS/peoples-choice/blob/main/assets/favicon.ico)

<a href="https://aditeyas.github.io/peoples-choice/" aria-label="See Current Stats"><img src="https://img.shields.io/badge/see_current_stats-green?style=for-the-badge"/>
</a>

This repo collects data about favorite anime, movies, and TV series.

## Contributing Guidelines

#### Step 1: Forking and cloning
- Fork this repository by clicking the Fork button at the top right of this page or simply [click here](https://github.com/aditeyaS/peoples-choice/fork).
- Clone the fork that you created

#### Step 2: Getting the name and ID
Head to [TMDB](https://www.themoviedb.org/) and search for your favorite anime, movie, and TV series and note their name and id. Please write the correct ID and names (e.g below) for consistent data.

**Anime**

For the project to work properly **make sure it's an anime series, and not a movie**

ID:
- The id is the path after ```https://www.themoviedb.org/tv/``` in the TMDB url.
- For example, in ```https://www.themoviedb.org/tv/37854``` the ID is ```37854```
- In ```https://www.themoviedb.org/tv/57041-gin-tama``` the ID is ```57041-gin-tama```

NAME:
- The name will be the name of anime displayed, please write it in the same case.
- Exapmple, write ```One Piece``` as ```One Piece``` and not ```one Piece```, ```One piece``` or ```pne piece```

![Anime Data Extraction Example](https://github.com/aditeyaS/peoples-choice/blob/main/assets/anime.png)

**Movie**

ID:
- The id is the path after ```https://www.themoviedb.org/movies/``` in the TMDB url.
- For example, in ```https://www.themoviedb.org/movie/890825-14-peaks-nothing-is-impossible``` the ID is ```890825-14-peaks-nothing-is-impossible```

NAME:
- The name will be similar to above (in the same case)

![Movie Data Extraction Example](https://github.com/aditeyaS/peoples-choice/blob/main/assets/movie.png)

**TV Series**

ID:
- The id is the path after ```https://www.themoviedb.org/tv/``` in the TMDB url.
- For example, in ```https://www.themoviedb.org/tv/62560-mr-robot``` the ID is ```62560-mr-robot```

NAME:
- The name will be similar to above (in the same case)

![TV Series Data Extraction Example](https://github.com/aditeyaS/peoples-choice/blob/main/assets/tv-series.png)

#### Step 3: Adding your favourites (REQUIRED)
Go to **data.js** and add your details to the array
```javascript
{
        username: '<github_username>',
        favAnime: '<anime name: as on TMDB>',
        favAnimeID: 'anime id: as on TMDB',
        favMovie: 'movie name: as on TMDB',
        favMovieID: 'movie id: as on TMDB',
        favSeries: 'series name: as on TMDB',
        favSeriesID: 'series id: as on TMDB'
},
```
#### Step 4: Updating contributors.md (REQUIRED)
- Goto **contributors.md** and similarly add your name and socials as previously added.
- You can add as many socials as you want

#### Step 5: Additional Changes (OPTIONAL)
- Improve the UI of the page
- Make any other changes that you want

#### Step 6: Make a new branch
Create a new branch and checkout to that using ```git checkout -b <branch_name>```

#### Step 6: Add and commit your changes
- When you are satisfied with your changes, add those by using ```git add .```
- Commit you changes with a message ```git commit -m "your-message"```

#### Step 7: Update branch with main
Update your branch with main, by using ```git pull origin main```

#### Step 8: Raise Pull Request
- Resolve any conflicts (If exist). Add commit again if conflicts exist.
- Push your branch ```git push origin <branch_name>```
- On the pull request page of GitHub select the correct labels from the right and raise the pull request.

#### Congratulations 🎉
- You have successfully raised a PR, raised a PR. Wait for it to be merged. You can see the live preview [here](https://aditeyas.github.io/peoples-choice/)
- (Optional) ⭐ the repo

## Awesome contributors 🤩
<a href="https://github.com/aditeyas/peoples-choice/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=aditeyaS/peoples-choice" />
</a>

## License

Released under [MIT](/LICENSE) by [@aditeyaS](https://github.com/aditeyaS).
