<template>
  <div class="home">
    <h2>{{title}}</h2>
    <div class="container">
      <div class="row">
        <Card
          :dataCard="film"
          v-for="film in daftarFilm"
          :key="film.idFilm"
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
  name: "home",
  data() {
    return {
      title: "Daftar Film",
      daftarFilm: []
    };
  },
  components: {
    Card
  },
  created() {
    this.getDaftarFilm()
  },
  methods: {
    getDaftarFilm() {
      this.daftarFilm = this.$store.state.daftarFilm
      // return this.$store.state.daftarFilm;
    }
  }
};
</script>