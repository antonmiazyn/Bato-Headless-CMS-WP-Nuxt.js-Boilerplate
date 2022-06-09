<template>
  <v-row class="align-center bato-headless--full-height bato-headless__content-relative">
    <div class="bato-headless__illustrated-background" />
    <v-col>
      <section class="text-center bato-headless__content-relative">
        <v-container>
          <v-row>
            <v-col>
              <div class="mb-12">
                <logotype />
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h1 class="mb-6 bato-headless--h1">
                Headless CMS. <mark>Boilerplate.</mark>
                <br>
                Wordpress & Nuxt.js.
              </h1>
              <p class="mx-auto mb-4 bato-headless--descriptive-subtitle">
                As it's your first Wordpress & Nuxt.js Boilerplate instalation,
                and you're already seeing this text — that's mean that all is ok
                and you're ready for next move! Firstly, look through the current
                file structure to understand main principles. Then, you can follow
                the link below to meet complete documentation
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <nav role="navigation">
                <v-btn
                  depressed
                  :color="$vuetify.theme.themes.dark.primary"
                  to="/docs"
                  class="py-4 px-6 mx-2 bato-headless--button"
                >
                  Documentation
                </v-btn>
                <v-btn
                  depressed
                  outlined
                  :color="$vuetify.theme.themes.dark.primary"
                  to="/demo"
                  class="py-4 px-6 mx-2 bato-headless--button outlined"
                >
                  DEMO
                </v-btn>
              </nav>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-col>
  </v-row>
</template>

<script>
import Logotype from '~/components/homepage/Logotype'

export default {
  name: 'Homepage',

  components: {
    Logotype
  },

  data () {
    return {
      bato: {
        logotype: {
          path: require('~/static/bato.png'),
          alt: 'Bato Agence Web'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bato-headless {
  &__content-relative {
    position: relative;
  }

  &__illustrated-background {
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    background-image: url('~/assets/img/placeholder.webp');
    background-size: cover;
    background-position: center;
    opacity: 0.6;
  }

  mark {
    background: linear-gradient(141.8deg, cyan 14.44%, #01C4E5 86.47%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;

    @keyframes blinking {
      0% {
        width: 12rem;
        height: 8rem;
      }
      50% {
        width: calc(12rem * 1.8);
        height: calc(8rem * 1.8);
      }
    }

    &::before {
      content: '';
      display: block;
      width: 12rem;
      height: 8rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 158, 212, 1);
      filter: blur(85px);
      opacity: 60%;
      animation: blinking 8s linear infinite;
    }
  }
}
</style>
