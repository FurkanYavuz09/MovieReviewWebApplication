<template>
<div class="card">
    <div class="card-header">
    Movie Results
    </div>
    <div class="card-body">
        <!-- form control -->
        <div class="row mb-3">
            <div class="col">
            <div class="d-flex">
                <input v-model="titleToSearch" class="form-control"
                placeholder="Search by title" />
                <a v-on:click="filterMovies('title')"
                class="btn btn-primary ms-4"
                >
                Search
                </a>
            </div>
            </div>
            <div class="col">
            <div class="d-flex">
            
           
            </div>
            </div>
        </div>
        <!-- form control -->

        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="movie in movies" class="col" :key="movie._id">
            <div class="card">
                <img v-if="movie.poster" class="card-img-top"
                :src="movie.poster" />
                <div class="card-body">
                <h5 class="card-title fw-bold">{{ movie.title }}</h5>
                <p v-if="movie.rated" class="card-text">
                    Rating: {{ movie.rated }}
                </p>
                <p class="card-text">{{ movie.plot }}</p>
                <router-link :to="'/movie/'+movie._id" class="btn btn-primary">
                    View Reviews
                </router-link>
                </div>
            </div>
            </div>
        </div>
    </div>
    <nav>
     
    </nav>
</div>
</template>

<script>
import MovieService from '../services/MovieService';

export default {
  name: 'Movies',
  data() {
    return {
      movies: [],
      ratings: [],
      titleToSearch: '',
      ratingToSearch: '',
      typeToSearch: '',
      currentPage: 0,
      entriesPerPage: 20,
      totalPage: 0,
    };
  },
  created() {
    this.getMovies();
    this.getRatings();
  },
  methods: {
    async getMovies() {
      let query = '';
      if (this.typeToSearch === 'title') {
        query = this.titleToSearch;
      } else if (this.typeToSearch === 'rated') {
        query = this.ratingToSearch;
      }
      const moviesData = await MovieService.getMovies(
        query, this.typeToSearch, this.currentPage
      );
      this.totalPages = Math.ceil(
        moviesData.total_results / this.entriesPerPage
      ) - 1;
      this.movies = moviesData.movies;
    },
    async getRatings() {
      this.ratings = await MovieService.getRatings();
    },
    
    
  },
};
</script>

<style scoped>
.card-body{
    text-align: left;
}
</style>
