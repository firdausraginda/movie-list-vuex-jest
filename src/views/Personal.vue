<template>
  <div class="personal">
    <div class="container">
      <div class="row">
        <Card
          :dataCard="film"
          v-for="film in getDaftarFilmChoose"
          :key="film.idFilm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  data() {
    return {
    };
  },
  computed: {
    getDaftarFilmChoose() {
      return this.$store.state.daftarFilmChoose;
    }
  },
  components: {
      Card
  }
};
</script>

