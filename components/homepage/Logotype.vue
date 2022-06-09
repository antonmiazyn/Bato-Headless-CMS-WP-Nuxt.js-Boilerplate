<template>
  <a
    :href="url"
    target="_blank"
    :title="title"
    class="mx-auto d-block bato-headless__logotype"
  >
    <v-img
      :src="image.path"
      :alt="image.alt"
    />
  </a>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://bato.dev/',
      title: 'Bato Agence Web',

      image: {
        path: require('~/static/bato.png'),
        alt: 'Bato Agence Web'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bato-headless {
  &__logotype {
    width: 100%;
    max-width: 11rem;
    transition: opacity 0.4s linear;

    &:hover,
    &:focus {
      outline: none;
      opacity: 0.64;
    }
  }
}
</style>
