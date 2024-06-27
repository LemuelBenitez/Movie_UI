import axios from 'axios'

export const baseURL = axios.create({
    baseURL: "http://localhost:8080/",
    // baseURL: "https://9c96-103-106-239-104.ap.ngrok.io",
    // headers: {"ngrok-skip-browser-warning" : "true"} 
    //used to unblock cors from front end
    //better to initiate from springboot backend
});

export async function getAllMovies() {
    return await baseURL.get("/api/v1/movies");
}

export async function getMovieData(movieId){
    return await baseURL.get(`/api/v1/movies/${movieId}`)
}


