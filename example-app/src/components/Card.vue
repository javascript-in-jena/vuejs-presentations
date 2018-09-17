<template>
  <div class="card">
    <img class="card__poster" :src="poster" />
  </div>
</template>

<script>
  export default {
    props: ['poster']
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';
  @import '../assets/styles/mixins';

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
