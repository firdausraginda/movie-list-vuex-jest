<template>
  <div class="detail-film">
    <img
      :src="dataFilm.imgFilm"
      alt=""
    >
    <h1>{{dataFilm.judulFilm}}</h1>
    <p>{{dataFilm.deskripsiFilm}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataFilm: null
    };
  },
  created() {
    this.getDataFilmDetail();
  },
  methods: {
    getDataFilmDetail() {
      this.$store.state.daftarFilm.forEach(element => {
        if (element.idFilm == this.$route.params.id) {
          this.dataFilm = element;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-film {
  padding: 0 150px;
  img {
    border-radius: 5px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
  }
}
</style>