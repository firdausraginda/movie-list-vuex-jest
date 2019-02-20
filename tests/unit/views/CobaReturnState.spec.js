import { shallowMount } from '@vue/test-utils'
import CobaReturnState from '../../../src/views/CobaReturnState.vue'


describe('CobaReturnState.spec.js', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(CobaReturnState, {
            computed: {
                getValue() {
                    return 'ini yang lagi di test pake jest'
                }
            }
        })
        wrapper.setData({ counter: 10})
    })

    test('renders a $store.state value return from computed', () => {
        expect(wrapper.find('.coba-return-state').text().trim()).toEqual('ini yang lagi di test pake jest')
    })

    test('counter add 1 each time increment triggered', () => {
        let btn = wrapper.find('button')
        btn.trigger('click')
        expect(wrapper.vm.counter).toEqual(11)
    })

})