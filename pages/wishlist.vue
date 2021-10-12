<template>
  <div>
    <NavBar />

    <div class="container movies">
      <!-- movies grid -->
      <div id="movie-grid" class="movies-grid">
        <div
          v-for="(movie, index) in countPlusLocalState"
          :key="index"
          class="movie"
        >
          <div class="movie-img">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt=""
            />
            <p class="review">{{ movie.vote_average }}</p>
          </div>
          <div class="info">
            <p class="title">{{ movie.title }}</p>
            <p class="release">Released:{{ movie.release_date }}</p>
            <NuxtLink
              class="button button-light"
              :to="{ name: 'movies-movieid', params: { movieid: movie.id } }"
            >
              View More
            </NuxtLink>
            <v-btn icon class="icn" @click="removeFromWatchlist(movie)">
              <v-icon class="ic">mdi-bookmark-minus-outline</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    countPlusLocalState(state) {
      console.log(state.wishlist.movies)
      return state.wishlist.movies
    },
  }),
  methods: {
    removeFromWatchlist(movie) {
      this.$store.dispatch('wishlist/removeFromWishlist', movie)
    },
  },
}
</script>
<style lang="scss" scoped>
.movies {
  padding: 25px 60px;
  .movies-grid {
    display: grid;
    column-gap: 32px;
    row-gap: 64px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 750px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1100px) {
      grid-template-columns: repeat(4, 1fr);
    }
    .movie {
      position: relative;
      display: flex;
      flex-direction: column;
      .movie-img {
        position: relative;
        overflow: hidden;
        &:hover {
          .overview {
            transform: translateY(0);
          }
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .review {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background-color: #daa520;
          color: #fff;
          border-radius: 0 0 15px 15px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .overview {
          line-height: 1.5;
          position: absolute;
          bottom: 0;
          background-color: rgba(201, 38, 2, 0.9);
          padding: 12px;
          color: #fff;
          transform: translateY(100%);
          transition: 0.3s ease-in-out all;
        }
      }
      .info {
        margin-top: auto;
        .title {
          margin-top: 8px;
          color: #fff;
          font-size: 20px;
        }
        .release {
          margin-top: 8px;
          color: #c9c9c9;
        }
        .button {
          margin-top: 8px;
        }
        .icn {
          position: absolute;
          bottom: 1%;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          &:disabled {
            background-color: #c4e9fa9a;
          }
        }
        .ic {
          color: #fff;
        }
      }
    }
  }
}
</style>