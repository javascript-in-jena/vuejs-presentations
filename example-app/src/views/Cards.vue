<template>
  <div class="cards">
    <div class="cards__grid">
      <card
        v-for="(movie, index) in movies"
        :key="index"
        :poster="movie.Poster"
      />
      <div class="cards__empty" v-if="movies.length === 0">Keine Filme gefunden</div>
    </div>
  </div>
</template>

<script>
  import Card from '../components/Card'

  export default {
    props: ['movies'],
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

  .cards__empty {
    color: beige;
    font-size: 52px;
  }
</style>
