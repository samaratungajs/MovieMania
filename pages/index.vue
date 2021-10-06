<template>
<div class="home">
    <Banner/>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
    return {
      movies: [],
      searchedMovies: [],
      searchInput: '',
    }
  },
  methods: {
    async getMovies() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=fefd2c0c4f5fa3f7e9de5368cbbf75fd&language=en-US&page=1`
      )
      const result = await data
      result.data.results.forEach((movie) => {
        this.movies.push(movie)
      })
    }
  }
}
</script>
