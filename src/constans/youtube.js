const KEYS = import.meta.env.VITE_YOUTUBE_API_KEY;

export const API_KEY = KEYS;
export const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const YOUTUBE_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY} `;

export const SEARCH_SUGGESTION_API=` http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query=`;
export default API_KEY;