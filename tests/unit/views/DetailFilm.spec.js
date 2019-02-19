import { shallowMount } from '@vue/test-utils'
import DetailFilm from '../../../src/views/DetailFilm.vue'

describe('DetailFilm.spec.js', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(DetailFilm, {
            data() {
                return {
                    dataFilm: { idFilm: 'gans', choosen: false, imgFilm: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Black_mirror_bandersnatch_poster.jpg/220px-Black_mirror_bandersnatch_poster.jpg', judulFilm: 'Black Mirror: Bandersnatch', deskripsiFilm: 'Black Mirror: Bandersnatch adalah film interaktif tahun 2018 dalam seri antologi fiksi ilmiah Black Mirror. Film ini ditulis oleh pencipta serinya, Charlie Brooker, dan disutradarai oleh David Slade. Netflix merilisnya sebagai film terpisah pada tanggal 28 Desember 2018.' }
                }
            },
            methods: {
                getDataFilmDetail() {
                    return {
                        dataFilm: { idFilm: 'gans', choosen: false, imgFilm: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Black_mirror_bandersnatch_poster.jpg/220px-Black_mirror_bandersnatch_poster.jpg', judulFilm: 'Black Mirror: Bandersnatch', deskripsiFilm: 'Black Mirror: Bandersnatch adalah film interaktif tahun 2018 dalam seri antologi fiksi ilmiah Black Mirror. Film ini ditulis oleh pencipta serinya, Charlie Brooker, dan disutradarai oleh David Slade. Netflix merilisnya sebagai film terpisah pada tanggal 28 Desember 2018.' }
                    }
                }
            }
        })
    })

    test('is DetailFilm component', () => {
        expect(wrapper.is(DetailFilm)).toBe(true)
        expect(wrapper.is('.detail-film')).toBe(true)
    })

    test('has "dataFilm" property and not null', () => {
        expect(wrapper.vm.dataFilm).not.toBeNull()
        expect(typeof wrapper.vm.dataFilm).toBe('object')
        expect(wrapper.vm.dataFilm.imgFilm).not.toBeNull()
        expect(wrapper.vm.dataFilm.judulFilm).not.toBeNull()
        expect(wrapper.vm.dataFilm.deskripsiFilm).not.toBeNull()
    })

    test('has the expected html structure', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

    test('"getDataFilmDetail is a funciton and not null', () => {
        expect(typeof wrapper.vm.getDataFilmDetail).toBe('function')
        expect(wrapper.vm.getDataFilmDetail).not.toBeNull()
    })

})