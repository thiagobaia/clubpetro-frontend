import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3004/",
})

export const rest = axios.create({
    baseURL: "https://restcountries.com/v2/all",
})




