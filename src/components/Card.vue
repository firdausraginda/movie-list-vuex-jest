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
        class="btn btn-primary"
        @click="moveToDetail()"
      >Detail</a>
      <a
        v-if="dataCard.choosen == false"
        class="btn"
        @click="chooseDataFil()"
      >Pilih</a>
      <a
        v-if="this.$route.name == 'personal' && dataCard.choosen == true"
        class="btn"
        @click="deleteDataFil()"
      >Hapus</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idFilmx: ""
    };
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
    chooseDataFil() {
      this.$store.dispatch("addDataFilmChoosen", this.dataCard);
    },
    deleteDataFil() {
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
  img {
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