<template>
  <div>
    <NavBar />
    <div class="single-movie container">
      <div class="movie-info">
        <div class="movie-img">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
          />
        </div>
        <div class="movie-content">
          <h1>{{ movie.title }}</h1>
          <p class="movie-fact tagline">
            <span>Tagline: </span> "{{ movie.tagline }}"
          </p>
          <p class="movie-fact">
            <span> Released: </span>{{ movie.release_date }}
          </p>
          <p class="movie-fact"><span> Duration: </span>{{ movie.runtime }}</p>
          <p class="movie-fact"><span> Overview: </span>{{ movie.overview }}</p>
        </div>
      </div>
      <div v-if="reviews.length > 0" class="reviewbox">
        <p class="Rvtitle">{{ movie.title }}</p>
        <h2 class="Rvtitle">Reviews</h2>
        <div v-for="(movie, index) in reviews" :key="index" class="review">
          <span class="user">
            <v-chip 
              class="ma-2 ricn "
              background-color="primary"
              text-color="black"
              label
            >
              <v-icon left> mdi-account-circle-outline </v-icon>
              {{ movie.author }}
            </v-chip>
                      <!-- <p class="rate">5</p> -->
          </span>
          <div>
            <span v-if="!readMoreActivated.includes(movie.author)"
              >{{ movie.content.slice(0, 200) }}
            </span>
            <a
              class=""
              v-if="!readMoreActivated.includes(movie.author)"
              @click="activateReadMore(movie.author)"
              href="#"
            >
              Read more...
            </a>
            <span
              v-if="readMoreActivated.includes(movie.author)"
              v-html="movie.content"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneMovie',
  data() {
    return {
      movie: '',
      reviews: [],
      readMoreActivated: [],
    }
  },
  async fetch() {
    await this.getOneMovie()
    await this.getMovieReview()
  },
  methods: {
    async getOneMovie() {
      this.movie = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=fefd2c0c4f5fa3f7e9de5368cbbf75fd&language=en-US`
      )
      // this.movie = await (await data).data
    },
    async getMovieReview() {
      const data = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}/reviews?api_key=fefd2c0c4f5fa3f7e9de5368cbbf75fd&language=en-US&page=1`
      )
      data.results.forEach((review) => {
        this.reviews.push(review)
      })
      console.log(this.reviews)
    },
    activateReadMore(author) {
      this.readMoreActivated.push(author)
    },
  },
}
</script>

<style lang="scss" scoped>
//  .user{
//    .rate{
//           position: absolute;
//           left: 90%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           width: 30px;
//           height: 30px;
//           background-color: #daa520;
//           color: #fff;
//           border-radius: 0 0 15px 15px;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//             0 2px 4px -1px rgba(0, 0, 0, 0.06);
// }
//  }
.Rvtitle {
  margin-top: 4px;
  text-align: center;
  font-style: italic;
}

.reviewbox {
  border-style: solid;
  border-width: 1px;
  border-color: yellow;
}
.review {
  padding: 20px 50px;
}
.ricn {
  margin-bottom: 8px;
}
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;
  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 500px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .movie-img {
      img {
        max-height: 500px;
        width: 100%;
        @media (min-width: 500px) {
          max-height: 400px;
          width: initial;
        }
      }
    }
    .movie-content {
      h1 {
        font-size: 50px;
        font-weight: 400;
      }
      .movie-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;
        span {
          font-weight: 600;
          text-decoration: none;
        }
      }
      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
}
</style>