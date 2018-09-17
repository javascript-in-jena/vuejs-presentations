<template>
  <div class="cards">
    <div class="cards__grid">
       <div class="card" v-for="(movie, index) in movies" :key="index">
          <img class="card__poster" :src="movie.Poster" />
        </div>
    </div>
  </div>
</template>

<script>
  import BeautyAndTheBeast from '../data/beauty-and-the-beast'
  import BladeRunner from '../data/blade-runner'
  import FightClub from '../data/fight-club'
  import Moonlight from '../data/moonlight'
  import StarWars from '../data/star-wars'
  import JungleBook from '../data/the-jungle-book'

  export default {
    data () {
      return {
        movies: [
          BeautyAndTheBeast,
          BladeRunner,
          FightClub,
          Moonlight,
          StarWars,
          JungleBook
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/variables';
  @import '../assets/styles/mixins';

  .cards {
    width: 100%;
    position: relative;
    margin: 50px 0;
  }

  .cards__grid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    max-width: $cards-grid-width;
    margin: 0 auto;
    justify-content: center;
    align-content: center;
  }

  .card {
    @extend %transitionBlock;
    width: $cards-width;
    height: $cards-height;
    overflow: hidden;
    z-index: 2;
    cursor: pointer;
    will-change: transform;
    margin: 15px;
  }

  .card__poster {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .card:hover {
    filter: contrast(1.2);
    z-index: 4;
    transform: scale(1.1);
  }
</style>
