const API_Key = "589c6c313d0dd2b7fe616a9c1add5e85";

const requests = {
  fetchtrending: `/trending/all/week?api_key=${API_Key}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
  fetchComedy: `/discover/movie?api_key=${API_Key}&with_genres=35`,
  fetchActions: `/discover/movie?api_key=${API_Key}&with_genres=28`,
  fetchHorror: `/discover/movie?api_key=${API_Key}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
  fetchRomance: `/discover/movie?api_key=${API_Key}&with_genres=10749`,
  fetchTopRated: `/movie/top_rated?api_key=${API_Key}&languag2=en-US`,
};

export default requests;
