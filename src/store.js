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

    //action
    getFilms(url) {
        return axios.get(url)
    },
    getSeriesTv(url) {
        return axios.get(url)
    }

})