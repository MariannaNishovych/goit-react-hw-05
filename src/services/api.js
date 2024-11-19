import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
    headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjBmZGNlNmY5YTNkYmQyMWRlNjU5NTQ2NGZmZDA5ZSIsIm5iZiI6MTczMjAxOTQwOC4yNzE4NDE1LCJzdWIiOiI2NzNjN2EzYzhmYmMwODk2MWEyM2FkNmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZyDFhNA1HlVky_2M_H6ejalWzHjol1dKhYK8BVZ96xI'
    }
};