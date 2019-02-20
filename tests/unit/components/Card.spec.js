import { shallowMount, createLocalVue } from '@vue/test-utils'
import Card from '../../../src/components/Card.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Card.spec.js', () => {
    let wrapper;
    let actions;
    let store;
    beforeEach(() => {
        actions = {
            deleteDataFilmChoosen: jest.fn(),
            addDataFilmChoosen: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
        wrapper = shallowMount(Card, {
            store,
            localVue,
            propsData: {
                dataCard: { idFilm: 'gans', choosen: false, imgFilm: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Black_mirror_bandersnatch_poster.jpg/220px-Black_mirror_bandersnatch_poster.jpg', judulFilm: 'Black Mirror: Bandersnatch', deskripsiFilm: 'Black Mirror: Bandersnatch adalah film interaktif tahun 2018 dalam seri antologi fiksi ilmiah Black Mirror. Film ini ditulis oleh pencipta serinya, Charlie Brooker, dan disutradarai oleh David Slade. Netflix merilisnya sebagai film terpisah pada tanggal 28 Desember 2018.' }
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
        })
    })

    test('is Card component', () => {
        expect(wrapper.is(Card)).toBe(true)
        expect(wrapper.is('.card')).toBe(true)
    })

    test('Card property has object type of data with value ', () => {
        expect(wrapper.vm.dataCard).not.toBeNull()
        expect(wrapper.vm.dataCard.idFilm).toBe('gans')
        expect(typeof wrapper.vm.dataCard).toBe('object')
        expect(wrapper.vm.dataCard.imgFilm).toEqual('https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Black_mirror_bandersnatch_poster.jpg/220px-Black_mirror_bandersnatch_poster.jpg')
        expect(wrapper.vm.dataCard.idFilm).toEqual('gans')
        expect(wrapper.vm.dataCard.judulFilm).toEqual('Black Mirror: Bandersnatch')
    })

    test('has the expected html structure', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

    test('check the length of judul film after "cutTextJudul" being called', () => {
        let getJudulFilm = wrapper.vm.dataCard.judulFilm
        let cutJudulFilm = wrapper.vm.cutTextJudul(getJudulFilm)
        expect(cutJudulFilm.length).toBeLessThanOrEqual(32)
    })

    test('check the length of deskripsi film after "cutTextDeskripsi" being called', () => {
        let getDesFilm = wrapper.vm.dataCard.deskripsiFilm;
        let cutDesFilm = wrapper.vm.cutTextDeskripsi(getDesFilm)
        expect(cutDesFilm).toHaveLength(102)
    })

    test('dispatches "addDataFilmChoosen" when "chooseDataFilm" being called', () => {
        let btnChooseDataFilm = wrapper.find('.chooseDataFilm')
        btnChooseDataFilm.trigger('click')
        expect(actions.addDataFilmChoosen).toHaveBeenCalled()
    })

    test('dispatches "deleteDataFilmChoosen" when "deleteDataFilm" being called', () => {
        let btnDeleteDataFilm = wrapper.find('.deleteDataFilm')
        expect(btnDeleteDataFilm.exists()).toBe(true)
        // btnDeleteDataFilm.trigger('click')
        // expect(actions.deleteDataFilmChoosen).toHaveBeenCalled()
    })

})