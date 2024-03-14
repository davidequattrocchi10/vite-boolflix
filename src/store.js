import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({

    //state
    base_api_url_film: 'https:api.themoviedb.org/3/search/movie?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf&query=',
    base_api_url_series_tv: 'https:api.themoviedb.org/3/search/tv?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf&query=',
    results: {
        films: '',
        seriesTv: '',
    },
    loading: true,
    error: false,
    base_url: "https://api.themoviedb.org/3/",
    key_actors: "/credits?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf",
    api_key: "?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf",
    actors: [],
    genres: [],
    gone: true,

    genres_movie: [],
    genres_tv: [],
    genres_movie_tv: [],
    selectedGenre: '',
    endpoint_genres_tv: 'https://api.themoviedb.org/3/genre/tv/list?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf',
    endpoint_genres_movie: 'https://api.themoviedb.org/3/genre/movie/list?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf',
    popular_movie: [],
    endpoint_popular_movie: 'https://api.themoviedb.org/3/movie/popular?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf',



    //action
    getMovieTV(url) {
        return axios.get(url)
    },
    fetchGenresTV() {
        axios.get(this.endpoint_genres_tv)
            .then(response => {
                this.genres_tv = response.data.genres;
                this.mergeGenres();
            })
            .catch(error => {
                console.error(error);
            })
    },

    fetchGenresMovie() {
        axios.get(this.endpoint_genres_movie)
            .then(response => {
                this.genres_movie = response.data.genres;
                this.mergeGenres();
            })
            .catch(error => {
                console.error(error);
            })
    },
    //Fills genres_movie_tv with all genres (movie and series tv)
    mergeGenres() {
        if (this.genres_tv.length !== 0 && this.genres_movie.length !== 0) {
            this.genres_movie_tv = this.genres_movie;
            this.genres_tv.forEach(tv => {
                // Check if the object with the same id exists in genres_movie
                let existsInMovies = this.genres_movie.some(movie => movie.id === tv.id);
                // If it doesn't exist, push it into genres_movie
                if (!existsInMovies) {
                    this.genres_movie_tv.push(tv);
                }
            });
            console.log(this.genres_movie);
        }
    },
    fetchPopularMovie() {
        axios.get(this.endpoint_popular_movie)
            .then(response => {
                this.popular_movie = response.data.results.slice(0, 8);
            })
            .catch(error => {
                console.error(error);
            })
    },
    filter(element) {
        if (this.selectedGenre == "") {
            return true
        }
        for (let i = 0; i < element.length; i++) {
            if (element[i] == this.selectedGenre) {
                return true
            }



        }
        return false
    }
})