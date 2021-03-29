import axios from 'axios';

//we make the api call using axios
export default axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 9000,
    headers: {
        'Content-Type': 'application/json',
    }
});