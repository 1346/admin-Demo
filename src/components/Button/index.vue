<template>
  <div>
    <button class="c-button"><slot text="hello from child"></slot></button>
  </div>
</template>

<script>
  export default {
    name: 'EButton',
    props: {
      title: {
        type: String,
        default: undefined
      },
    },
    data() {
      return {

      }
    }
  }
</script>

<style></style>
