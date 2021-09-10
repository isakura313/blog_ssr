<template>
  <v-app>
    <Header />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>
