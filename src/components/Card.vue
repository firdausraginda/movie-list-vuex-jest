<template>
  <div class="card col-4">
    <div class="card-body">
      <img
        class="card-img-top"
        :src="dataCard.imgFilm"
        alt="Card image cap"
      >
      <h5 class="card-title">{{cutTextJudul(dataCard.judulFilm)}}</h5>
      <p>{{cutTextDeskripsi(dataCard.deskripsiFilm)}}</p>
      <a
        class="btn btn-primary moveToDetail"
        @click="moveToDetail()"
      >Detail</a>
      <a
        v-if="dataCard.choosen == false"
        class="btn chooseDataFilm"
        @click="chooseDataFilm()"
      >Pilih</a>
      <a
        v-if="dataCard.choosen == true && this.$route.name == 'personal'"
        class="btn deleteDataFilm"
        @click="deleteDataFilm()"
      >Hapus</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    dataCard: {
      type: Object,
      default: null
    }
  },
  methods: {
    cutTextJudul(text) {
      return `${text.substr(0, 30)}`;
    },
    cutTextDeskripsi(text) {
      return `${text.substr(0, 100)}..`;
    },
    moveToDetail() {
      this.$router.push({ path: `/detailFilm/${this.dataCard.idFilm}` });
    },
    chooseDataFilm() {
      this.$store.dispatch("addDataFilmChoosen", this.dataCard);
    },
    deleteDataFilm() {
      this.$store.dispatch("deleteDataFilmChoosen", this.dataCard);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  color: white !important;
}
.card {
  border: none;
  text-align: left;
  .card-img-top {
    border-radius: 5px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  .card-title {
    font-weight: bold;
  }
}
</style>