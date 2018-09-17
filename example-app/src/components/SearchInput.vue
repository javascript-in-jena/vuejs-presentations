<template>
  <div class="search__wrapper">
    <button class="search__close" @click="onClose">
      <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewbox="0 0 24 24"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
    </button>
    <input class="search__input" placeholder="Suchen" @input="onSearch"/>
  </div>
</template>

<script>
  export default {
    methods: {
      onClose () {
        this.$emit('close')
      },

      onSearch ({ value }) {
        this.$emit('search', value)
      }
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
