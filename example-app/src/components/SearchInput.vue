<template>
  <div class="search__wrapper">
    <button class="search__close" @click="onClose"><close-icon /></button>
    <input class="search__input" placeholder="Suchen" @input="onSearch"/>
  </div>
</template>

<script>
  import CloseIcon from './icons/Close'

  export default {
    methods: {
      onClose () {
        this.$emit('close')
      },
      onSearch (evt) {
        this.$emit('search', evt.target.value)
      }
    },
    components: {
      CloseIcon
    }
  }
</script>

<style lang="scss">
  .search__wrapper {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparentize(#000, 0.4);
    z-index: 99;
  }

  .search__input {
    color: beige;
    font-size: 52px;
    border-bottom: 1px solid beige;
    text-align: center;
    font-weight: 100;
  }

  .search__close {
    color: beige;
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
  }
</style>
