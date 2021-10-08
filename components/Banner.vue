<template>
  <div class="hero">
    <img src="../assets/imgs/banner.jpg" alt="" />
    <div class="text-container">
      <div class="text">
        <span class="mini-heading">Top Movie Meter</span>
        <h1><span>Movie</span> Mania</h1>
        <a href="#movie-grid" class="button">View More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style lang="scss" scoped>
.hero {
  height: 200px;
  position: relative;
  @media (min-width: 750px) {
    height: 400px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text-container {
    z-index: 99;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 31%;
    .text {
      padding: 0 16px;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      align-items: center;
    }
    .mini-heading {
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      color: #DAA520;
      margin-bottom: 8px;
      margin-left: 17%;
      @media (min-width: 750px) {
        font-size: 22px;
      }
    }
    h1 {
      color: #fff;
      font-size: 64px;
      font-weight: 200;
      margin-bottom: 8px;
      @media (min-width: 750px) {
        font-size: 84px;
      }
      span {
        font-weight: 500;
      }
    }
    .button {
      font-size: 20px;
      align-self: center;
      background-color: #DAA520;
      margin-left: 20%;

    }
  }
}
</style>