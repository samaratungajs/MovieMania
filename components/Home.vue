<template>
  <div>
    <div class="container search">
      <input
        v-model.lazy="searchInput"
        type="text"
        placeholder="Search"
        @keyup.enter="$fetch"
      />
    </div>
    <Movies
      :movies="movies"
      :searchedMovies="searchedMovies"
      :searchInput="searchInput"
    ></Movies>
  </div>
</template>

<script>
import Movies from './Movies.vue'
export default {
  name: 'Home',
  components: { Movies },
  data() {
    return {
      movies: [],
      searchedMovies: [],
      searchInput: '',
      wishlist: [],
      clicked: [],
    }
  },
  async fetch() {
    if (this.searchInput === '') {
      await this.getMovies()
      this.searchInput = ''
      this.searchedMovies = []
      return
    }
    await this.searchMovies()
  },
  methods: {
    async getMovies() {
      const data = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=fefd2c0c4f5fa3f7e9de5368cbbf75fd&language=en-US&page=1`
      )
      data.results.forEach((movie) => {
        this.movies.push(movie)
      })
      // console.log(data)
    },
    async searchMovies() {
      const data = await this.$axios.$get(
        `https://api.themoviedb.org/3/search/movie?api_key=fefd2c0c4f5fa3f7e9de5368cbbf75fd&language=en-US&page=1&query=${this.searchInput}`
      )
      data.results.forEach((movie) => {
        this.searchedMovies.push(movie)
      })
    },
    addToWatchlist(movie) {
      this.clicked.push(movie.id)
      this.$store.dispatch('wishlist/addToWishlist', movie)
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  margin-left: 35%;
  padding: 15px 16px;
  input {
    max-width: 350px;
    width: 100%;
    padding: 12px 6px;
    font-size: 14px;
    background: white;
    outline: white;
    border-radius: 10px;
  }
  .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>