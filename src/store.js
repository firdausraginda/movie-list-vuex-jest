import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    daftarFilm: [
      { idFilm: 'iu1kh291', choosen: false, imgFilm: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Black_mirror_bandersnatch_poster.jpg/220px-Black_mirror_bandersnatch_poster.jpg', judulFilm: 'Black Mirror: Bandersnatch', deskripsiFilm: 'Black Mirror: Bandersnatch adalah film interaktif tahun 2018 dalam seri antologi fiksi ilmiah Black Mirror. Film ini ditulis oleh pencipta serinya, Charlie Brooker, dan disutradarai oleh David Slade. Netflix merilisnya sebagai film terpisah pada tanggal 28 Desember 2018.' },
      { idFilm: 'owuehi23', choosen: false, imgFilm: 'http://www.gstatic.com/tv/thumb/v22vodart/15418836/p15418836_v_v8_ab.jpg', judulFilm: 'The Kissing Booth', deskripsiFilm: 'The Kissing Booth adalah film komedi romantis Amerika 2018 yang disutradarai oleh Vince Marcello, berdasarkan novel dengan nama yang sama oleh Beth Reekles. Ini dibintangi Molly Ringwald, Joey King, Jacob Elordi dan Joel Courtney. Film ini dirilis pada 11 Mei 2018 di Netflix.' },
      { idFilm: 'akjshd982', choosen: false, imgFilm: 'http://www.gstatic.com/tv/thumb/v22vodart/15899535/p15899535_v_v8_aa.jpg', judulFilm: '22 July', deskripsiFilm: '22 Juli adalah film drama kejahatan Amerika 2018 tentang serangan Norwegia 2011 dan akibatnya, berdasarkan buku One of Us: The Story of a Massacre in Norway - dan Aftermath oleh Åsne Seierstad. Film ini ditulis, disutradarai dan diproduksi oleh Paul Greengrass dan menampilkan pemain dan kru Norwegia.' },
      { idFilm: 'lashdu701', choosen: false, imgFilm: 'http://www.gstatic.com/tv/thumb/v22vodart/14381112/p14381112_v_v8_ab.jpg', judulFilm: 'Bright', deskripsiFilm: 'Bright adalah film kejahatan fantasi televisi urban Amerika tahun 2017 yang disutradarai oleh David Ayer, ditulis oleh Max Landis, dan dibintangi oleh Will Smith, Joel Edgerton, Noomi Rapace, Lucy Fry, Edgar Ramirez, dan Ike Barinholtz.' },
      { idFilm: 'uaksjh912', choosen: false, imgFilm: 'http://www.gstatic.com/tv/thumb/v22vodart/16071151/p16071151_v_v8_aa.jpg', judulFilm: 'Malevolent', deskripsiFilm: 'Malevolent adalah film horor 2018 yang disutradarai oleh Olaf de Fleur Johannesson dan dengan skenario yang ditulis oleh Ben Ketai dan Eva Konstantopoulos.' },
      { idFilm: 'auhkjd212', choosen: false, imgFilm: 'http://www.gstatic.com/tv/thumb/v22vodart/15507261/p15507261_v_v8_ab.jpg', judulFilm: 'The Little Mermaid', deskripsiFilm: 'The Little Mermaid adalah film petualangan fantasi aksi langsung Amerika tahun 2018 yang terinspirasi oleh kisah Hans Christian Andersen dengan nama yang sama. Film ini disutradarai dan ditulis oleh Blake Harris, disutradarai oleh Chris Bouchard, dan diproduksi oleh Armando Gutierrez dan Robert Molloy.' },
      { idFilm: 'liknqw761', choosen: false, imgFilm: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKDLnA6_4vG0JtfYLSY2P20mVljG3Sp80fV3Tl6MVvYrhb2bE', judulFilm: 'Sierra Burgess Is a Loser', deskripsiFilm: 'Sierra Burgess Is a Loser adalah film komedi remaja Amerika Serikat yang disutradarai oleh Ian Samuels dari skenario oleh Lindsey Beer. Film ini menceritakan kembali kisah Cyrano de Bergerac yang modern dan dibintangi Shannon Purser, Kristine Froseth, RJ Cyler dan Noah Centineo.' },
      { idFilm: 'kjnqwe370', choosen: false, imgFilm: 'http://www.gstatic.com/tv/thumb/v22vodart/13343447/p13343447_v_v7_aa.jpg', judulFilm: 'I Am the Pretty Thing That Lives in the House', deskripsiFilm: 'I Am the Pretty Thing That Lives in the House adalah film horor Amerika-Kanada 2016 yang ditulis dan disutradarai oleh Osgood Perkins. Ini bintang Ruth Wilson sebagai perawat tinggal yang mencurigai rumah majikan lansia mungkin berhantu.' }
    ],
    daftarFilmChoose: [],
    valueCoba: 'lagi coba return state'
  },
  mutations: {
    mutateAddFilmChoosen(state, dataFilm) {
      dataFilm.choosen = true
      state.daftarFilmChoose.push(dataFilm)
    },
    mutateDeleteFilmChoosen(state, dataFilm) {
      for (let i=0; i<state.daftarFilmChoose.length; i++){
        if (state.daftarFilmChoose[i].idFilm == dataFilm.idFilm) {
          state.daftarFilmChoose.splice(i, 1)
        }
      }
      state.daftarFilm.forEach(element => {
        if (element.idFilm == dataFilm.idFilm) {
          element.choosen = false
        }
      })
    }
  },
  actions: {
    addDataFilmChoosen(context, dataFilm) {
      context.commit('mutateAddFilmChoosen', dataFilm)
    },
    deleteDataFilmChoosen(context, dataFilm) {
      context.commit('mutateDeleteFilmChoosen', dataFilm)
    }
  }
})
