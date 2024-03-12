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

    genres_movie_tv: [],
    selectedGenre: '',
    endpoint_genres_tv: 'https://api.themoviedb.org/3/genre/tv/list?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf',
    endpoint_genres_movie: 'https://api.themoviedb.org/3/genre/movie/list?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf',
    popular_movie: [],
    endpoint_popular_movie: 'https://api.themoviedb.org/3/movie/popular?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf',



    //action
    getFilms(url) {
        return axios.get(url)
    },
    getSeriesTv(url) {
        return axios.get(url)
    },

    fetchGenresTV() {
        axios.get(this.endpoint_genres_tv)
            .then(response => {
                console.log(response.data.genres)
                this.genres_movie_tv = response.data.genres;
            })
            .catch(error => {
                console.error(error);
            })
    },

    fetchGenresMovie() {
        axios.get(this.endpoint_genres_movie)
            .then(response => {
                console.log(response.data.genres)
                this.genres_movie_tv = response.data.genres;
            })
            .catch(error => {
                console.error(error);
            })
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