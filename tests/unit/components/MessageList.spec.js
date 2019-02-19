import { shallowMount } from '@vue/test-utils'
import MessageList from '../../../src/components/MessageList.vue'

describe('MessageList.spec.js', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(MessageList, {
            propsData: {
                messagesProp: ['Cat', 'Monkey']
            }
        })
    })
    
    test('is MessageList component', () => {
        expect(wrapper.is(MessageList)).toBe(true)
        expect(wrapper.is('.message-list')).toBe(true)
    })
    
    test('message property has array type of data', () => {
        expect(typeof wrapper.vm.messagesProp).toBe('object')
    })

    test('has received ["Cat", "Monkey"] as the messagesProp property', () => {
        expect(wrapper.props().messagesProp).toEqual(["Cat", "Monkey"])
    })

    test('has the expected html structure', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

})