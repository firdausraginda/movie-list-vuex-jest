<template>
  <div class="personal">
    <div class="container">
      <div class="row">
        <Card
          v-for="film in getDaftarFilmChoose"
          :key="film.idFilm"
          :dataCard="film"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  data() {
    return {};
  },
  components: {
    Card
  },
  computed: {
    getDaftarFilmChoose() {
      return this.$store.state.daftarFilmChoose;
    }
  }
};
</script>

