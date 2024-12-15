const tmdbUrl ="https://api.themoviedb.org/3";
const apiKey = '78aa8825ddc648227332e26718ec01e1';



export const fetchMovies = async (endpoint, params = {}) => {
    const queryParams = new URLSearchParams({
      api_key: API_KEY,
      ...params,
    }).toString();
  
    const response = await fetch(`${BASE_URL}/movie/${endpoint}?${queryParams}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.results;
  };

  
  export const searchMovies = async (query, params = {}) => {
    const queryParams = new URLSearchParams({
      api_key: API_KEY,
      query,
      ...params,
    }).toString();
  
    const response = await fetch(`${BASE_URL}/search/movie?${queryParams}`);
    if (!response.ok) {
      throw new Error(`Failed to search movies: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.results;
  };