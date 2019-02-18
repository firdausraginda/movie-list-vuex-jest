import { shallowMount } from '@vue/test-utils'
import Home from '../../../src/views/Home.vue'
import Card from '../../../src/components/Card.vue'

describe('Home.spec.js', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Home, {
            computed: {
                getDaftarFilm() {
                    return [{ idFilm: 'iu1kh291', choosen: false, imgFilm: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Black_mirror_bandersnatch_poster.jpg/220px-Black_mirror_bandersnatch_poster.jpg', judulFilm: 'Black Mirror: Bandersnatch', deskripsiFilm: 'Black Mirror: Bandersnatch adalah film interaktif tahun 2018 dalam seri antologi fiksi ilmiah Black Mirror. Film ini ditulis oleh pencipta serinya, Charlie Brooker, dan disutradarai oleh David Slade. Netflix merilisnya sebagai film terpisah pada tanggal 28 Desember 2018.' }]
                }
            }
        })
    })

    test('default', () => {
        expect(wrapper.is(Home)).toBe(true)
    })

    test('default2', () => {
        expect(wrapper.find(Card).vm.dataCard.idFilm).toEqual('iu1kh291')
    })

    test('has "title" string type of data with "Daftar Film" value', () => {
        expect(typeof wrapper.vm.title).toBe('string')
        expect(wrapper.vm.title).toEqual('Daftar Film')
    })

    test('has the expected html structure', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

})