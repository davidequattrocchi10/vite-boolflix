import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({

    //state
    base_api_url: 'https:api.themoviedb.org/3/search/movie?api_key=8aaf5d0c9dbcf9bd205fd6476fe7f4bf&query=',
    films: [],
    loading: true,
    error: false,





    //action
    getFilms(url) {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data.results)
                this.films = response.data.results;
                this.loading = false;
                this.error = false;


            })
            .catch((error) => {
                console.error(error.response.data.error)
                this.error = true;

            })
    }


})