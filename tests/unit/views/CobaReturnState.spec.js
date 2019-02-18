import { shallowMount } from '@vue/test-utils'
import CobaReturnState from '../../../src/views/CobaReturnState.vue'


describe('CobaReturnState.spec.js', () => {
    test('renders a $store.state value return from computed', () => {
        const wrapper = shallowMount(CobaReturnState, {
            computed: {
                getValue(){
                    return 'ini yang lagi di test pake jest'
                }
            },
        })

        expect(wrapper.find('.coba-return-state').text().trim()).toEqual('ini yang lagi di test pake jest')
    })
})