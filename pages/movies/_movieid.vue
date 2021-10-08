<template>
<div>
  <NavBar/>
  <div class="single-movie container">
      <!-- <nuxt-link :to="{name:'index'}" class="button">HOME</nuxt-link> -->
      <div class="movie-info">
          <div class="movie-img">
            <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt=""/>
          </div>
      <div class="movie-content">
          <h1>{{movie.title}}</h1>
          <p class="movie-fact tagline">
              <span>Tagline: </span> "{{movie.tagline}}"
          </p>
          <p class="movie-fact">
            <span>
              Released:
            </span>{{movie.release_date}}          
          </p>
          <p class="movie-fact">
            <span>
              Duration:
            </span>{{movie.runtime}}          
          </p>
           <p class="movie-fact">
            <span>
              Overview:
            </span>{{movie.overview}}          
          </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'OneMovie',
    data(){
        return{
            movie:''
        }
    },
    async fetch(){
        await this.getOneMovie()
    },
    methods:{
        async getOneMovie(){
            const data = axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=fefd2c0c4f5fa3f7e9de5368cbbf75fd&language=en-US`)
            this.movie = await (await data).data
        }
    }
}
</script>

<style lang="scss">
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
          max-height: 500px;
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