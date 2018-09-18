<template>
  <div class="wrapper">
    <search-toggle class="search-toggle" @toggle="onOverlayToggle" v-if="!searchOverlay" />
    <search-input @close="onOverlayToggle" @search="updateSearchQuery" v-else />
    <cards :movies="filteredMovies" />
  </div>
</template>

<script>
  import Cards from './views/Cards';
  import SearchToggle from './components/SearchToggle';
  import SearchInput from './components/SearchInput';

  // Data
  import BeautyAndTheBeast from './data/beauty-and-the-beast'
  import BladeRunner from './data/blade-runner'
  import FightClub from './data/fight-club'
  import Moonlight from './data/moonlight'
  import StarWars from './data/star-wars'
  import JungleBook from './data/the-jungle-book'

  export default {
    data () {
      return {
        searchOverlay: false,
        query: '',
        movies: [
          BeautyAndTheBeast,
          BladeRunner,
          FightClub,
          Moonlight,
          StarWars,
          JungleBook
        ],
        // filteredMovies: []
      }
    },

    methods: {
      onOverlayToggle () {
        if (!this.searchOverlay) {
          this.query = ''
        }

        this.searchOverlay = !this.searchOverlay

      },

      updateSearchQuery (query) {
        this.query = query
      }
    },

    computed: {
      filteredMovies () {

        if (!this.query) {
          return this.movies
        }

        return this.movies.filter(movie =>
          movie.Title.toLowerCase().includes(this.query.toLowerCase())
        )
      }
    },

    // watch: {
    //   query () {
    //     if (!this.query) {
    //       this.filteredMovies = this.movies
    //     } else {
    //       this.filteredMovies = this.movies.filter(movie =>
    //         movie.Title.toLowerCase().includes(this.query.toLowerCase())
    //       )
    //     }
    //   },
    // },

    components: {
      Cards,
      SearchToggle,
      SearchInput
    },

    // mounted () {
    //   this.filteredMovies = this.movies
    // }
  }
</script>

<style lang="scss">
  @import 'normalize-scss';
  @import './assets/styles/variables';

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: $color-background;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 14px;
    line-height: 1.5;
    color: $color-font;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable `input` types in iOS */
    -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
  }

  input {
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  .search-toggle {
    position: absolute;
    top: 20px;
    right: 30px;
  }

  .icon {
    fill: currentColor;
  }
</style>
