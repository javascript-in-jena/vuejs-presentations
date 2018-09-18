<template>
  <span class="icon">
    <slot></slot>
  </span>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .icon {
    color: beige;
    cursor: pointer;

    svg {
      fill: currentColor;
    }
  }
</style>
