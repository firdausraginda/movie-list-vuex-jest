import { shallowMount } from '@vue/test-utils'
import Personal from '../../../src/views/Personal.vue'
import Card from '../../../src/components/Card.vue'

describe('Personal.spec.js', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Personal, {
            computed: {
                getDaftarFilmChoose() {
                    return [{ idFilm: 'gans', choosen: false, imgFilm: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Black_mirror_bandersnatch_poster.jpg/220px-Black_mirror_bandersnatch_poster.jpg', judulFilm: 'Black Mirror: Bandersnatch', deskripsiFilm: 'Black Mirror: Bandersnatch adalah film interaktif tahun 2018 dalam seri antologi fiksi ilmiah Black Mirror. Film ini ditulis oleh pencipta serinya, Charlie Brooker, dan disutradarai oleh David Slade. Netflix merilisnya sebagai film terpisah pada tanggal 28 Desember 2018.' }]
                }
            }
        })
    })

    test('is Personal component',  () => {
        expect(wrapper.is(Personal)).toBe(true)
        expect(wrapper.is('.personal')).toBe(true)
    })

    test('has the expected html structure', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

    test('contains a Card component', () => {
        expect(wrapper.contains(Card)).toBe(true)
    })

    test('Card element exists', () => {
        expect(wrapper.find(Card).exists()).toBe(true)
    })

    test('Personal has a "dataCard" property', () => {
        expect(wrapper.find(Card).vm.dataCard.idFilm).toEqual('gans')
    })

})