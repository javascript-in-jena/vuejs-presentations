<template>
  <button class="search-button" @click="onSearchToggle">
    <search-icon />
  </button>
</template>

<script>
  import SearchIcon from './icons/Search'

  export default {
    methods: {
      onSearchToggle () {
        this.$emit('toggle')
      }
    },

    components: {
      SearchIcon
    }
  }
</script>
