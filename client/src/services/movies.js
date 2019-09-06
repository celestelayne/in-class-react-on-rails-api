import axios from 'axios';

const URL = 'http://localhost:4567';

const api = axios.create({
  baseURL: `${URL}/movies`
});

export const fetchMovies = async () => {
  console.log(URL)
  try{
    const resp = await api.get('/')
    console.log(resp)
    return resp.data.movies;
  } catch (e) {
    console.log(e)
  }
}
