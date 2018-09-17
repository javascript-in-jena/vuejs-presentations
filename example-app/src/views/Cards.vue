<template>
  <div class="cards">
    <div class="cards__grid">
      <card
        v-for="(movie, index) in movies"
        :key="index"
        :poster="movie.Poster"
      />
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

  import Card from '../components/Card'

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
    },

    components: {
      Card
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';

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
</style>
