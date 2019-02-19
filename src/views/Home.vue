<template>
  <div class="home">
    <h2>{{title}}</h2>
    <div class="container">
      <div class="row">
        <Card
          v-for="film in getDaftarFilm"
          :key="film.idFilm"
          :dataCard="film"
        />
      </div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card.vue";

export default {
  data() {
    return {
      title: "Daftar Film"
    };
  },
  components: {
    Card
  },
  computed: {
    getDaftarFilm() {
      return this.$store.state.daftarFilm;
    }
  }
};
</script>