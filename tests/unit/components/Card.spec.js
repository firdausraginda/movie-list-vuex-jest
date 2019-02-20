import { shallowMount } from '@vue/test-utils'
import Card from '../../../src/components/Card.vue'

describe('Card.spec.js', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Card, {
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
            }
        })
    })

    test('is Card component', () => {
        expect(wrapper.is(Card)).toBe(true)
    })
})