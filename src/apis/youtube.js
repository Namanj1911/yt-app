import axios from 'axios';

const KEY = 'AIzaSyA4Hdqgad-K6EbhVrh5Ooi-kyFTl-mhgPY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});