import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1";
const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzliNzRiZWMzMjQxMzg1NTY4ZjA0NzMiLCJpYXQiOjE2NzExNjU3ODYsImV4cCI6MTY3MTI1MjE4Nn0.-At_RNJ2E7aaVy72YLXjG8DW0Tg2brkn0pWN0oTmu7I"
const token = localStorage.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.accessToken : fakeToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `${token}` }
}); 