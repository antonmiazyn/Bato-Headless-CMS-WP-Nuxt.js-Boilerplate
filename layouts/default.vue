<template>
  <v-app class="bato-headless">
    <v-main class="bato-headless__main">
      <v-container fluid class="bato-headless--full-height">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.bato-headless {
  &__main {
    background-color: $color-bato-dark;
    color: $color-bato-light;
  }
}
</style>
