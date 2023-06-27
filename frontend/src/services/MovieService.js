import axios from 'axios';

export default class MovieService {
  static async getMovies(query = '', by = 'title', page = 0) {
    const res = await axios.get(
      'http://localhost:5000/movies'
    );
    return res.data;
  }

  static async getMovie(id) {
    const res = await axios.get(
      'http://localhost:5000/movies/${id}',
    );
    return res.data;
  }

  static async getRatings() {
    const res = await axios.get(
      '',
    );
    return res.data;
  }
}
